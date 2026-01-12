import { Button } from "@/components/ui/button";
import { Sparkles, Scissors } from "lucide-react";

const StoreCrossSell = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-narrow mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
          <Sparkles className="w-7 h-7 text-primary" />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
          Estos productos los usamos en cada servicio
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Agenda una cita de peluquería y experimenta la calidad de nuestros productos. 
          Tu mascota saldrá impecable, feliz y con el mejor cuidado profesional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#reservar" className="inline-flex items-center gap-2">
              <Scissors className="w-5 h-5" />
              Agendar Peluquería
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/">Conocer servicios</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoreCrossSell;
