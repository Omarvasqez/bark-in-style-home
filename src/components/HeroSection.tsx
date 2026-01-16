import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-grooming.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Peluquería canina profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 py-12 md:py-20">
        <div className="max-w-xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">Concón, Chile</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Cuidado canino{" "}
            <span className="text-secondary">tranquilo y real</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed">
            Peluquería, hotel y guardería donde tu perro se siente cómodo. 
            Resultados naturales, sin estrés y con mucho cariño.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#reservar">Agendar Peluquería</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#servicios">Hotel y Guardería</a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-foreground">200+</p>
              <p className="text-sm text-primary-foreground/70">Clientes felices</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-foreground">5.0</p>
              <p className="text-sm text-primary-foreground/70">Rating Google</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-foreground">5+</p>
              <p className="text-sm text-primary-foreground/70">Años experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
