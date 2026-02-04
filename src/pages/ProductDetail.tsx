import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";
import { getProductByHandle, formatPrice } from "@/data/products";
import { ShoppingBag, Minus, Plus, ChevronLeft, Check, Package, Truck, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const product = getProductByHandle(handle || "");
  const { addItem } = useCart();
  const { toast } = useToast();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
          <Link to="/tienda">
            <Button>Volver a la tienda</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const hasVariants = product.type === "variant" && product.variants;
  const allVariantsSelected =
    !hasVariants ||
    product.variants?.every((v) => selectedVariants[v.name]);

  const handleAddToCart = () => {
    if (!allVariantsSelected) {
      toast({
        title: "Selecciona las opciones",
        description: "Por favor elige talla y color antes de agregar al carrito.",
        variant: "destructive",
      });
      return;
    }

    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant: hasVariants
          ? { size: selectedVariants["Talla"], color: selectedVariants["Color"] }
          : undefined,
      },
      quantity
    );

    toast({
      title: "¡Agregado al carrito!",
      description: `${product.name} x${quantity}`,
    });
  };

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6 md:py-10">
        {/* Breadcrumb */}
        <Link
          to="/tienda"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">Volver a la tienda</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {discount > 0 && (
                <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-sm px-3 py-1">
                  -{discount}%
                </Badge>
              )}
              {product.type === "bundle" && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground text-sm px-3 py-1">
                  <Package className="w-3 h-3 mr-1" />
                  Pack
                </Badge>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.dogType}</p>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {product.name}
              </h1>
              <p className="text-muted-foreground">{product.shortDescription}</p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>

            {/* Bundle Items */}
            {product.type === "bundle" && product.bundleProducts && (
              <div className="bg-secondary/50 rounded-xl p-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Package className="w-4 h-4 text-primary" />
                  Este pack incluye:
                </h3>
                <ul className="space-y-2">
                  {product.bundleProducts.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Variants */}
            {hasVariants && product.variants && (
              <div className="space-y-4">
                {product.variants.map((variant) => (
                  <div key={variant.name}>
                    <label className="block text-sm font-medium mb-2">
                      {variant.name}:{" "}
                      <span className="text-primary">
                        {selectedVariants[variant.name] || "Seleccionar"}
                      </span>
                    </label>
                    {variant.name === "Color" ? (
                      <div className="flex flex-wrap gap-2">
                        {variant.values.map((value) => (
                          <button
                            key={value}
                            onClick={() =>
                              setSelectedVariants((prev) => ({
                                ...prev,
                                [variant.name]: value,
                              }))
                            }
                            className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all duration-200 transform ${
                              selectedVariants[variant.name] === value
                                ? "border-primary bg-primary/10 text-primary scale-105 shadow-md"
                                : "border-border hover:border-primary/50 hover:scale-102 active:scale-95"
                            }`}
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                    ) : variant.name === "Talla" ? (
                      <div className="flex flex-wrap gap-2">
                        {variant.values.map((value) => (
                          <button
                            key={value}
                            onClick={() =>
                              setSelectedVariants((prev) => ({
                                ...prev,
                                [variant.name]: value,
                              }))
                            }
                            className={`w-12 h-12 rounded-lg border-2 text-sm font-bold transition-all duration-200 transform ${
                              selectedVariants[variant.name] === value
                                ? "border-primary bg-primary text-primary-foreground scale-105 shadow-md"
                                : "border-border hover:border-primary/50 hover:bg-muted active:scale-95"
                            }`}
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <Select
                        value={selectedVariants[variant.name] || ""}
                        onValueChange={(value) =>
                          setSelectedVariants((prev) => ({
                            ...prev,
                            [variant.name]: value,
                          }))
                        }
                      >
                        <SelectTrigger className="w-full max-w-[200px]">
                          <SelectValue placeholder={`Elige ${variant.name.toLowerCase()}`} />
                        </SelectTrigger>
                        <SelectContent>
                          {variant.values.map((value) => (
                            <SelectItem key={value} value={value}>
                              {value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-2">Cantidad:</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="w-4 h-4" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  {product.stock} disponibles
                </span>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="flex-1 gap-2 text-base h-14"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="w-5 h-5" />
                Agregar al carrito
              </Button>
              <Button variant="outline" size="lg" className="h-14">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="bg-secondary/30 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">Envío con Starken a todo Chile</p>
                  <p className="text-xs text-muted-foreground">
                    El costo se calcula en el checkout según tu ubicación
                  </p>
                </div>
              </div>
            </div>

            {/* Why We Recommend */}
            <div className="border-t pt-6">
              <p className="text-sm italic text-muted-foreground mb-1">
                "{product.whyRecommend}"
              </p>
              <p className="text-xs text-primary font-medium">— Bark in Style</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 max-w-3xl">
          <h2 className="text-xl font-bold mb-4">Descripción</h2>
          <div className="prose prose-sm text-muted-foreground">
            {product.description.split("\n").map((paragraph, idx) => (
              <p key={idx} className="mb-3 whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
