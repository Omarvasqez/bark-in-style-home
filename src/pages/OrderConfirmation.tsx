import { useEffect, useState } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart, CartItem } from "@/contexts/CartContext";
import { formatPrice } from "@/data/products";
import {
  Check,
  Package,
  Truck,
  Building2,
  MessageCircle,
  Share2,
  Download,
  Copy,
  Heart,
  Instagram,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface OrderState {
  items: CartItem[];
  shippingInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    region: string;
  };
  paymentMethod: string;
  subtotal: number;
  discountAmount: number;
  shippingCost: number;
  total: number;
  orderNumber: string;
}

const OrderConfirmation = () => {
  const location = useLocation();
  const { clearCart } = useCart();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const orderState = location.state as OrderState | null;

  useEffect(() => {
    if (orderState) {
      clearCart();
    }
  }, []);

  if (!orderState) {
    return <Navigate to="/tienda" replace />;
  }

  const { items, shippingInfo, paymentMethod, subtotal, discountAmount, shippingCost, total, orderNumber } = orderState;

  const handleCopyOrder = () => {
    const orderText = `
Pedido #${orderNumber}
Bark in Style - Tienda

Productos:
${items.map((item) => `- ${item.name}${item.variant?.size ? ` (${item.variant.size})` : ""}${item.variant?.color ? ` - ${item.variant.color}` : ""} x${item.quantity} - ${formatPrice(item.price * item.quantity)}`).join("\n")}

Total: ${formatPrice(total)}

Envío a:
${shippingInfo.name}
${shippingInfo.address}
${shippingInfo.city}, ${shippingInfo.region}
    `.trim();

    navigator.clipboard.writeText(orderText);
    setCopied(true);
    toast({
      title: "¡Copiado!",
      description: "Los detalles del pedido fueron copiados al portapapeles.",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Pedido #${orderNumber} - Bark in Style`,
          text: `¡Acabo de hacer un pedido en Bark in Style! 🐕`,
          url: window.location.origin,
        });
      } catch {
        // User cancelled share
      }
    } else {
      handleCopyOrder();
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hola! Acabo de hacer el pedido #${orderNumber} en la tienda. ${paymentMethod === "transfer" ? "Ya envío el comprobante de transferencia." : ""}`
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Animation */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="relative inline-flex items-center justify-center mb-6">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center relative shadow-lg">
                <Check className="w-12 h-12 text-primary-foreground animate-scale-in" />
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              ¡Gracias por tu compra! 🎉
            </h1>
            <p className="text-muted-foreground">
              Tu pedido #{orderNumber} ha sido recibido correctamente.
            </p>
          </div>

          {/* Order Summary Card */}
          <div className="bg-card rounded-2xl border shadow-sm overflow-hidden mb-6">
            {/* Header */}
            <div className="bg-primary/5 p-4 md:p-6 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Resumen del pedido</span>
                </div>
                <span className="text-sm text-muted-foreground">#{orderNumber}</span>
              </div>
            </div>

            {/* Products */}
            <div className="p-4 md:p-6 space-y-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{item.name}</p>
                    {(item.variant?.size || item.variant?.color) && (
                      <p className="text-sm text-muted-foreground">
                        {item.variant.size && `Talla: ${item.variant.size}`}
                        {item.variant.size && item.variant.color && " · "}
                        {item.variant.color && `Color: ${item.variant.color}`}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground">Cantidad: {item.quantity}</p>
                  </div>
                  <p className="font-medium text-primary">{formatPrice(item.price * item.quantity)}</p>
                </div>
              ))}

              {/* Totals */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-sm text-primary">
                    <span>Descuento</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Envío (Starken)</span>
                  <span>{formatPrice(shippingCost)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="bg-card rounded-2xl border p-4 md:p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="w-5 h-5 text-primary" />
              <span className="font-semibold">Dirección de envío</span>
            </div>
            <div className="text-sm space-y-1 text-muted-foreground">
              <p className="font-medium text-foreground">{shippingInfo.name}</p>
              <p>{shippingInfo.address}</p>
              <p>{shippingInfo.city}, {shippingInfo.region}</p>
              <p>{shippingInfo.phone}</p>
              <p>{shippingInfo.email}</p>
            </div>
            <p className="text-xs text-muted-foreground mt-4 bg-secondary/50 rounded-lg p-3">
              📦 Tu pedido será procesado y enviado en 1-2 días hábiles. Recibirás un email con el número de seguimiento.
            </p>
          </div>

          {/* Payment Instructions */}
          {paymentMethod === "transfer" && (
            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-4 md:p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">Datos para transferencia</span>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="text-muted-foreground">Banco:</span> Banco Estado</p>
                <p><span className="text-muted-foreground">Tipo:</span> Cuenta Vista</p>
                <p><span className="text-muted-foreground">RUT:</span> 12.345.678-9</p>
                <p><span className="text-muted-foreground">Nombre:</span> Bark in Style SpA</p>
                <p><span className="text-muted-foreground">Email:</span> pagos@barkinstyle.cl</p>
                <p><span className="text-muted-foreground">Monto:</span> <strong className="text-primary">{formatPrice(total)}</strong></p>
              </div>
              <div className="mt-4 p-3 bg-background rounded-lg border">
                <p className="text-sm text-muted-foreground">
                  💡 <strong>Importante:</strong> Envía el comprobante por WhatsApp para confirmar tu pedido y agilizar el envío.
                </p>
              </div>
            </div>
          )}

          {paymentMethod === "webpay" && (
            <div className="bg-secondary/50 rounded-2xl border p-4 md:p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="font-semibold">Pago procesado con Webpay</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Tu pago ha sido confirmado. Recibirás un comprobante por email.
              </p>
            </div>
          )}

          {paymentMethod === "store" && (
            <div className="bg-secondary/50 rounded-2xl border p-4 md:p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="font-semibold">Pago en local</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Tu pedido quedará reservado. Recibirás un email cuando esté listo para pagar y retirar en nuestro local.
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            <a
              href={`https://wa.me/56912345678?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button size="lg" className="w-full gap-2 h-12">
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="w-full gap-2 h-12"
              onClick={handleShare}
            >
              <Share2 className="w-5 h-5" />
              Compartir pedido
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="ghost" size="sm" onClick={handleCopyOrder} className="gap-2">
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "¡Copiado!" : "Copiar detalles"}
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a href="https://instagram.com/barkinstyle.cl" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4" />
                Síguenos
              </a>
            </Button>
          </div>

          {/* Thank You Message */}
          <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/50 rounded-2xl p-6 md:p-8">
            <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-lg font-semibold mb-2">
              Gracias por confiar en nosotros
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              Tu pedido será procesado con cariño y enviado lo antes posible. 
              Si tienes dudas, escríbenos por WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/tienda">
                <Button variant="outline">Seguir comprando</Button>
              </Link>
              <Link to="/">
                <Button variant="ghost">Volver al inicio</Button>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p className="mb-2">¿Necesitas ayuda?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                WhatsApp: +56 9 1234 5678
              </a>
              <span className="hidden sm:inline">·</span>
              <a
                href="mailto:hola@barkinstyle.cl"
                className="hover:text-primary transition-colors"
              >
                hola@barkinstyle.cl
              </a>
            </div>
            <p className="mt-2">
              📍 Reñaca 90, Concón
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
