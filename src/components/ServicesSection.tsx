import { Scissors, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import groomingImg from "@/assets/service-grooming.jpg";
import hotelImg from "@/assets/service-hotel.jpg";
import daycareImg from "@/assets/service-daycare.jpg";

const services = [
  {
    icon: Scissors,
    title: "Peluquería Canina",
    description: "Baño, corte, limpieza de oídos y uñas. Trabajamos con calma para que tu perro esté cómodo.",
    benefit: "Resultados naturales y perros relajados",
    image: groomingImg,
    cta: "Agendar",
    ctaLink: "#reservar",
    primary: true,
  },
  {
    icon: Building,
    title: "Hotel para Mascotas",
    description: "Cuidado 24/7 mientras viajas. Espacio libre de jaulas y supervisión constante.",
    benefit: "Fotos y videos diarios para tu tranquilidad",
    image: hotelImg,
    cta: "Ver más",
    ctaLink: "#hotel",
    primary: false,
  },
  {
    icon: Users,
    title: "Guardería Canina",
    description: "Juego supervisado y socialización en grupos pequeños. Tu perro la pasa bien.",
    benefit: "Grupos reducidos según tamaño y temperamento",
    image: daycareImg,
    cta: "Ver más",
    ctaLink: "#guarderia",
    primary: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Cuidado real para tu perro
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Servicios pensados para el bienestar de tu mascota. Sin estrés, con cariño y resultados naturales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {service.description}
                </p>
                <p className="text-sm text-primary font-medium mb-5">
                  ✓ {service.benefit}
                </p>
                <Button 
                  variant={service.primary ? "default" : "outline"} 
                  className="w-full"
                  asChild
                >
                  <a href={service.ctaLink}>{service.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
