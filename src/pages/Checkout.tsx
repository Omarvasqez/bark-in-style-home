import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/data/products";
import {
  ChevronLeft,
  Truck,
  CreditCard,
  Building2,
  MapPin,
  Package,
  Check,
  AlertCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Chilean regions for shipping
const regions = [
  "Arica y Parinacota",
  "Tarapacá",
  "Antofagasta",
  "Atacama",
  "Coquimbo",
  "Valparaíso",
  "Metropolitana",
  "O'Higgins",
  "Maule",
  "Ñuble",
  "Biobío",
  "La Araucanía",
  "Los Ríos",
  "Los Lagos",
  "Aysén",
  "Magallanes",
];

// Simulated shipping costs by region (Starken integration)
const shippingCosts: Record<string, number> = {
  "Valparaíso": 3990,
  "Metropolitana": 4990,
  "O'Higgins": 4990,
  "Maule": 5490,
  "Coquimbo": 5990,
  "Biobío": 5990,
  "default": 6990,
};

const Checkout = () => {
  const { items, subtotal, discountPercent, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping");
  const [paymentMethod, setPaymentMethod] = useState("transfer");
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    postalCode: "",
  });

  const discountAmount = subtotal * (discountPercent / 100);
  const subtotalWithDiscount = subtotal - discountAmount;
  const shippingCost = shippingInfo.region
    ? shippingCosts[shippingInfo.region] || shippingCosts.default
    : 0;
  const total = subtotalWithDiscount + shippingCost;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !shippingInfo.name ||
      !shippingInfo.email ||
      !shippingInfo.phone ||
      !shippingInfo.address ||
      !shippingInfo.city ||
      !shippingInfo.region
    ) {
      toast({
        title: "Completa todos los campos",
        description: "Por favor ingresa tu información de envío completa.",
        variant: "destructive",
      });
      return;
    }
    setStep("payment");
  };

  const handlePlaceOrder = () => {
    const orderNumber = `BIS${Date.now().toString(36).toUpperCase()}`;
    
    navigate("/confirmacion", {
      state: {
        items: [...items],
        shippingInfo,
        paymentMethod,
        subtotal,
        discountAmount,
        shippingCost,
        total,
        orderNumber,
      },
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">No hay productos en tu carrito</h1>
          <Link to="/tienda">
            <Button>Ir a la tienda</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6 md:py-10">
        {/* Back Link */}
        <Link
          to="/carrito"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">Volver al carrito</span>
        </Link>

        {/* Progress */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div
            className={`flex items-center gap-2 ${
              step === "shipping" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === "shipping"
                  ? "bg-primary text-primary-foreground"
                  : step === "payment"
                  ? "bg-primary/20 text-primary"
                  : "bg-muted"
              }`}
            >
              1
            </div>
            <span className="hidden sm:inline text-sm font-medium">Envío</span>
          </div>
          <div className="w-12 h-0.5 bg-border" />
          <div
            className={`flex items-center gap-2 ${
              step === "payment" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === "payment"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              2
            </div>
            <span className="hidden sm:inline text-sm font-medium">Pago</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === "shipping" && (
              <form onSubmit={handleShippingSubmit} className="space-y-6">
                <div className="bg-card rounded-xl border p-6">
                  <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Información de envío
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input
                        id="name"
                        value={shippingInfo.name}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, name: e.target.value })
                        }
                        placeholder="Tu nombre"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={shippingInfo.email}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, email: e.target.value })
                        }
                        placeholder="tu@email.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={shippingInfo.phone}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, phone: e.target.value })
                        }
                        placeholder="+56 9 1234 5678"
                        className="mt-1"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Input
                        id="address"
                        value={shippingInfo.address}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, address: e.target.value })
                        }
                        placeholder="Calle, número, depto/casa"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">Ciudad / Comuna</Label>
                      <Input
                        id="city"
                        value={shippingInfo.city}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, city: e.target.value })
                        }
                        placeholder="Ej: Concón"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="region">Región</Label>
                      <Select
                        value={shippingInfo.region}
                        onValueChange={(value) =>
                          setShippingInfo({ ...shippingInfo, region: value })
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecciona región" />
                        </SelectTrigger>
                        <SelectContent>
                          {regions.map((region) => (
                            <SelectItem key={region} value={region}>
                              {region}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="bg-card rounded-xl border p-6">
                  <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    Método de envío
                  </h2>
                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://www.starken.cl/themes/custom/starter/images/logo.svg"
                        alt="Starken"
                        className="h-6"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      <div>
                        <p className="font-medium">Starken Express</p>
                        <p className="text-sm text-muted-foreground">
                          Entrega en 2-5 días hábiles
                        </p>
                      </div>
                    </div>
                    <span className="font-bold">
                      {shippingInfo.region
                        ? formatPrice(shippingCost)
                        : "Selecciona región"}
                    </span>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-base">
                  Continuar al pago
                </Button>
              </form>
            )}

            {step === "payment" && (
              <div className="space-y-6">
                {/* Shipping Summary */}
                <div className="bg-card rounded-xl border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Envío a
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setStep("shipping")}
                    >
                      Editar
                    </Button>
                  </div>
                  <div className="text-sm space-y-1">
                    <p className="font-medium">{shippingInfo.name}</p>
                    <p className="text-muted-foreground">{shippingInfo.address}</p>
                    <p className="text-muted-foreground">
                      {shippingInfo.city}, {shippingInfo.region}
                    </p>
                    <p className="text-muted-foreground">{shippingInfo.phone}</p>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-card rounded-xl border p-6">
                  <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Método de pago
                  </h2>

                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="space-y-3"
                  >
                    <label
                      htmlFor="transfer"
                      className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        paymentMethod === "transfer"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value="transfer" id="transfer" />
                      <Building2 className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <p className="font-medium">Transferencia Bancaria</p>
                        <p className="text-sm text-muted-foreground">
                          Recibe los datos al confirmar
                        </p>
                      </div>
                    </label>

                    <label
                      htmlFor="webpay"
                      className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        paymentMethod === "webpay"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value="webpay" id="webpay" />
                      <CreditCard className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <p className="font-medium">Webpay Plus</p>
                        <p className="text-sm text-muted-foreground">
                          Tarjeta de crédito o débito
                        </p>
                      </div>
                    </label>

                    <label
                      htmlFor="local"
                      className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        paymentMethod === "local"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value="local" id="local" />
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <p className="font-medium">Pagar en local</p>
                        <p className="text-sm text-muted-foreground">
                          Retira y paga en Reñaca 90, Concón
                        </p>
                      </div>
                    </label>
                  </RadioGroup>

                  {paymentMethod === "webpay" && (
                    <div className="mt-4 p-4 bg-secondary/50 rounded-lg flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        Al confirmar serás redirigido a Webpay para completar el pago
                        de forma segura.
                      </p>
                    </div>
                  )}
                </div>

                <Button
                  size="lg"
                  className="w-full h-14 text-base"
                  onClick={handlePlaceOrder}
                >
                  Confirmar pedido · {formatPrice(total)}
                </Button>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border p-6 sticky top-24">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Tu pedido
              </h2>

              {/* Items */}
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant?.size}-${item.variant?.color}`}
                    className="flex gap-3"
                  >
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      {item.variant && (
                        <p className="text-xs text-muted-foreground">
                          {item.variant.size} · {item.variant.color}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        Cantidad: {item.quantity}
                      </p>
                    </div>
                    <span className="text-sm font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 border-t pt-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-primary">
                    <span>Descuento ({discountPercent}%)</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Envío (Starken)</span>
                  <span>
                    {shippingInfo.region
                      ? formatPrice(shippingCost)
                      : "Por calcular"}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
