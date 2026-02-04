import { useState, useEffect } from "react";
import { X, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface PromoBannerProps {
  onClose?: () => void;
}

const PromoBanner = ({ onClose }: PromoBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if banner was already dismissed
    const dismissed = sessionStorage.getItem("promoBannerDismissed");
    const subscribed = localStorage.getItem("promoSubscribed");
    
    if (!dismissed && !subscribed) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("promoBannerDismissed", "true");
    onClose?.();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Email inválido",
        description: "Por favor ingresa un email válido.",
        variant: "destructive",
      });
      return;
    }

    // Simulate subscription
    localStorage.setItem("promoSubscribed", "true");
    setIsSubmitted(true);
    
    toast({
      title: "¡Listo! 🎉",
      description: "Tu código de descuento es BIENVENIDO10",
    });

    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-card rounded-2xl shadow-xl border overflow-hidden animate-scale-in">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition-colors z-10"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="p-6 md:p-8">
          {!isSubmitted ? (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Text */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  ¡Bienvenido a Bark in Style! 🐕
                </h3>
                <p className="text-muted-foreground text-sm">
                  Regístrate con tu email y recibe un <strong className="text-primary">10% de descuento</strong> en tu primera compra.
                </p>
              </div>

              {!showForm ? (
                <div className="space-y-3">
                  <Button
                    onClick={() => setShowForm(true)}
                    className="w-full gap-2"
                    size="lg"
                  >
                    <Sparkles className="w-4 h-4" />
                    Obtener mi descuento
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full text-muted-foreground"
                    onClick={handleClose}
                  >
                    No, gracias
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                    autoFocus
                  />
                  <Button type="submit" className="w-full" size="lg">
                    Obtener código
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Solo ofertas especiales. Sin spam, prometido.
                  </p>
                </form>
              )}
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                ¡Tu código está listo!
              </h3>
              <div className="bg-primary/10 rounded-lg p-4 mb-4">
                <p className="text-2xl font-mono font-bold text-primary">
                  BIENVENIDO10
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Usa este código en el checkout para obtener tu 10% de descuento.
              </p>
            </div>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/50 rounded-full blur-2xl" />
      </div>
    </div>
  );
};

export default PromoBanner;
