import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Heart, Shield, Users, Clock, Home, CheckCircle, Star, Quote } from "lucide-react";
import serviceHotel from "@/assets/service-hotel.jpg";
import serviceDaycare from "@/assets/service-daycare.jpg";

const Hospedaje = () => {
  const whatsappMessage = encodeURIComponent(
    "Hola Bark in Style, quiero consultar disponibilidad para hospedaje/guardería. Nombre del perro: __, Edad: __, Tamaño: __, Fechas: __"
  );
  const whatsappLink = `https://wa.me/56912345678?text=${whatsappMessage}`;

  const benefits = [
    {
      icon: Home,
      title: "Espacio libre de jaulas",
      description: "Ambiente abierto donde tu perro puede moverse, jugar y descansar con total libertad."
    },
    {
      icon: Shield,
      title: "Supervisión constante",
      description: "Atención permanente las 24 horas para garantizar seguridad y bienestar."
    },
    {
      icon: Heart,
      title: "Ambiente cálido y seguro",
      description: "Un hogar temporal donde tu perro se sentirá querido y protegido."
    },
    {
      icon: Users,
      title: "Cupos limitados",
      description: "Máximo 6 perros por semana para asegurar atención personalizada."
    },
    {
      icon: Star,
      title: "Clientes frecuentes priorizados",
      description: "Nuestros clientes habituales tienen prioridad en la reserva de cupos."
    },
    {
      icon: Clock,
      title: "Rutinas personalizadas",
      description: "Respetamos los horarios de comida, paseo y descanso de cada perro."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Contacto por WhatsApp",
      description: "Escríbenos para consultar disponibilidad y contarnos sobre tu perro."
    },
    {
      number: "02",
      title: "Pre-calificación",
      description: "Evaluamos compatibilidad con otros huéspedes y necesidades especiales."
    },
    {
      number: "03",
      title: "Confirmación del cupo",
      description: "Reservamos tu lugar y coordinamos los detalles de la estadía."
    },
    {
      number: "04",
      title: "Atención personalizada",
      description: "Tu perro disfruta de cuidado exclusivo durante toda su estadía."
    }
  ];

  const testimonials = [
    {
      name: "Carolina M.",
      text: "Dejé a mi Luna por primera vez y estaba muy nerviosa. Isidora me mandó fotos y videos todos los días. Luna volvió feliz y relajada.",
      dog: "Luna, Golden Retriever"
    },
    {
      name: "Sebastián R.",
      text: "El único lugar donde confío dejar a mi Toby. Se nota el cariño y la dedicación. Ya es cliente frecuente.",
      dog: "Toby, French Bulldog"
    },
    {
      name: "Valentina P.",
      text: "Increíble el trato personalizado. Respetaron todas las rutinas de mi Coco y hasta le dieron sus medicamentos a la hora exacta.",
      dog: "Coco, Shih Tzu"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={serviceHotel}
            alt="Hospedaje y guardería para perros"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container-narrow mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Cupos limitados por semana
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hospedaje y guardería con{" "}
              <span className="text-primary">atención personalizada</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Espacio libre de jaulas, supervisado las 24 horas y con mucho cariño. 
              Tu perro se sentirá como en casa mientras tú no estás.
            </p>
            
            <Button asChild variant="whatsapp" size="xl" className="w-full sm:w-auto">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Consultar disponibilidad
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                La experiencia
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Un día en Bark in Style
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Cada mañana comienza con un paseo tranquilo por el jardín, seguido de un desayuno 
                  respetando los horarios y porciones que cada familia nos indica.
                </p>
                <p>
                  Durante el día, los perros juegan en grupos pequeños y compatibles, siempre bajo 
                  supervisión. Los más tranquilos tienen su espacio de descanso con camas cómodas.
                </p>
                <p>
                  Isidora, nuestra fundadora, supervisa personalmente cada estadía. Enviamos fotos 
                  y videos diarios para que siempre sepas cómo está tu compañero.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img
                  src={serviceDaycare}
                  alt="Perros jugando en guardería"
                  className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg">
                  <p className="font-semibold">Ambiente familiar</p>
                  <p className="text-sm opacity-90">Sin jaulas ni encierros</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              ¿Por qué elegirnos?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lo que nos hace diferentes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              No somos una pensión tradicional. Somos un espacio donde cada perro recibe 
              atención individual y mucho cariño.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section-padding bg-primary/5">
        <div className="container-narrow mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Proceso simple
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reservar es fácil. Solo necesitas escribirnos y te guiamos en todo el proceso.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-6 h-full border border-border/50 hover:shadow-lg transition-all duration-300">
                  <span className="text-4xl font-bold text-primary/20 mb-4 block">{step.number}</span>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <CheckCircle className="h-6 w-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Testimonios
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.dog}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            ¿Listo para reservar?
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
            Escríbenos por WhatsApp para consultar disponibilidad. Los cupos son limitados 
            y nuestros clientes frecuentes tienen prioridad.
          </p>
          <Button asChild size="xl" className="bg-background text-foreground hover:bg-background/90 w-full sm:w-auto">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultar disponibilidad por WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Hospedaje;
