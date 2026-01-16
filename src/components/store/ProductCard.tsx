import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Sparkles, Dog, Package } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const discount = product.compareAtPrice
    ? Math.round(
        ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
      )
    : 0;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // For variant products, redirect to product page
    if (product.type === "variant") {
      window.location.href = `/producto/${product.handle}`;
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });

    toast({
      title: "¡Agregado al carrito!",
      description: product.name,
    });
  };

  return (
    <Link to={`/producto/${product.handle}`}>
      <Card className="group overflow-hidden border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1 h-full">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {discount > 0 && (
            <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
              -{discount}%
            </Badge>
          )}
          {product.type === "bundle" && (
            <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
              <Package className="w-3 h-3 mr-1" />
              Pack
            </Badge>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-4 md:p-5">
          <h3 className="font-bold text-foreground text-base md:text-lg mb-3 line-clamp-1">
            {product.name}
          </h3>

          {/* Purpose */}
          <div className="flex items-start gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground line-clamp-1">
              {product.shortDescription}
            </p>
          </div>

          {/* Dog Type */}
          <div className="flex items-start gap-2 mb-3">
            <Dog className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground line-clamp-1">
              {product.dogType}
            </p>
          </div>

          {/* Why Recommend */}
          <div className="bg-secondary/50 rounded-lg p-3 mb-4">
            <p className="text-sm text-foreground italic line-clamp-2">
              "{product.whyRecommend}"
            </p>
            <p className="text-xs text-primary font-medium mt-1">— Bark in Style</p>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
            <Button size="sm" className="gap-2" onClick={handleQuickAdd}>
              <ShoppingBag className="w-4 h-4" />
              {product.type === "variant" ? "Ver" : "Agregar"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
