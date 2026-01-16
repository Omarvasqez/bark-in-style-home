import { Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section id="reservar" className="section-padding bg-primary">
      <div className="container-narrow mx-auto text-center">
        {/* Heart Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
          <Heart className="w-8 h-8 text-primary-foreground" />
        </div>

        {/* Content */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Tu perro en buenas manos
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Agenda tu cita y conoce un espacio donde tu perro se siente cómodo, 
          tranquilo y bien cuidado.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="secondary" 
            size="xl" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <a href="#" className="inline-flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Agendar Peluquería
            </a>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-10 pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/70 text-sm">
            📍 Concón, Chile • 📞 +56 9 1234 5678
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
