import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/data/products";
import {
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
  ChevronLeft,
  Tag,
  ArrowRight,
  Package,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const {
    items,
    updateQuantity,
    removeItem,
    subtotal,
    totalItems,
    discountCode,
    discountPercent,
    applyDiscount,
    removeDiscount,
  } = useCart();
  const { toast } = useToast();
  const [codeInput, setCodeInput] = useState("");

  const handleApplyCode = () => {
    if (!codeInput.trim()) return;
    const success = applyDiscount(codeInput);
    if (success) {
      toast({
        title: "¡Código aplicado!",
        description: `${discountPercent || 10}% de descuento activado`,
      });
      setCodeInput("");
    } else {
      toast({
        title: "Código inválido",
        description: "El código ingresado no es válido o ha expirado.",
        variant: "destructive",
      });
    }
  };

  const discountAmount = subtotal * (discountPercent / 100);
  const subtotalWithDiscount = subtotal - discountAmount;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-3">Tu carrito está vacío</h1>
            <p className="text-muted-foreground mb-6">
              Agrega algunos productos para empezar tu compra
            </p>
            <Link to="/tienda">
              <Button size="lg" className="gap-2">
                <Package className="w-5 h-5" />
                Ver productos
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6 md:py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              to="/tienda"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-2 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm">Seguir comprando</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Tu Carrito</h1>
          </div>
          <span className="text-muted-foreground">
            {totalItems} {totalItems === 1 ? "producto" : "productos"}
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.variant?.size}-${item.variant?.color}`}
                className="flex gap-4 p-4 bg-card rounded-xl border"
              >
                {/* Image */}
                <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                  {item.variant && (
                    <p className="text-sm text-muted-foreground">
                      {item.variant.size && `Talla: ${item.variant.size}`}
                      {item.variant.size && item.variant.color && " · "}
                      {item.variant.color && `Color: ${item.variant.color}`}
                    </p>
                  )}
                  <p className="font-bold text-primary mt-1">{formatPrice(item.price)}</p>

                  {/* Mobile: Quantity & Remove */}
                  <div className="flex items-center justify-between mt-3 md:hidden">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1, item.variant)
                        }
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1, item.variant)
                        }
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeItem(item.id, item.variant)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Desktop: Quantity & Remove */}
                <div className="hidden md:flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1, item.variant)
                      }
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1, item.variant)
                      }
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="w-24 text-right font-bold">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-destructive"
                    onClick={() => removeItem(item.id, item.variant)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border p-6 sticky top-24">
              <h2 className="text-lg font-bold mb-4">Resumen del pedido</h2>

              {/* Discount Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  ¿Tienes un código de descuento?
                </label>
                {discountCode ? (
                  <div className="flex items-center justify-between bg-primary/10 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-primary" />
                      <span className="font-medium text-primary">{discountCode}</span>
                      <span className="text-sm text-muted-foreground">
                        (-{discountPercent}%)
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={removeDiscount}
                      className="text-xs"
                    >
                      Quitar
                    </Button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ingresa tu código"
                      value={codeInput}
                      onChange={(e) => setCodeInput(e.target.value)}
                      className="flex-1"
                    />
                    <Button variant="outline" onClick={handleApplyCode}>
                      Aplicar
                    </Button>
                  </div>
                )}
                <p className="text-xs text-muted-foreground mt-2">
                  💡 Regístrate con tu email y obtén un 10% de descuento
                </p>
              </div>

              {/* Totals */}
              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-sm text-primary">
                    <span>Descuento ({discountPercent}%)</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Envío</span>
                  <span className="text-muted-foreground">Calculado en checkout</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(subtotalWithDiscount)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout">
                <Button size="lg" className="w-full mt-6 gap-2 h-14 text-base">
                  Continuar al checkout
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              {/* Trust */}
              <p className="text-xs text-center text-muted-foreground mt-4">
                🔒 Compra 100% segura · Envío con Starken
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Cart;
