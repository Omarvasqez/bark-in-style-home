import { Heart, Shield, Award, Users } from "lucide-react";
import trustImage from "@/assets/trust-section.jpg";

const features = [
  {
    icon: Heart,
    title: "Cariño genuino",
    description: "Tu perro es tratado con el mismo amor que le damos a los nuestros. Su bienestar es lo primero.",
  },
  {
    icon: Shield,
    title: "Ambiente seguro",
    description: "Espacios tranquilos, supervisión constante y cuidado atento en todo momento.",
  },
  {
    icon: Award,
    title: "Experiencia real",
    description: "Años trabajando con perros de todas las razas y temperamentos. Sabemos cómo tratarlos.",
  },
  {
    icon: Users,
    title: "Trato personalizado",
    description: "Conocemos a cada perro por su nombre. Adaptamos el servicio a lo que cada uno necesita.",
  },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
              <img
                src={trustImage}
                alt="Cliente feliz con su mascota"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 bg-card rounded-xl p-4 shadow-[var(--shadow-elevated)]">
              <p className="text-2xl font-bold text-primary">5+ años</p>
              <p className="text-sm text-muted-foreground">cuidando mascotas</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Un lugar donde tu perro está cómodo
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Sabemos que confiar a tu perro no es fácil. Por eso creamos un espacio 
              tranquilo, con atención real y donde cada mascota se siente en casa.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
