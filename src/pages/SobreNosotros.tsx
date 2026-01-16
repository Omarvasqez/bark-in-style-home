import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Star, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-grooming.jpg";

const SobreNosotros = () => {
  const whatsappMessage = encodeURIComponent(
    "Hola Bark in Style, me gustaría obtener más información sobre sus servicios."
  );
  const whatsappLink = `https://wa.me/56912345678?text=${whatsappMessage}`;

  const differentiators = [
    {
      icon: Heart,
      title: "Atención real",
      description: "Cada perro recibe cuidado individual según su personalidad. Sin apuros, con cariño."
    },
    {
      icon: Shield,
      title: "Ambiente seguro",
      description: "Supervisión constante en un espacio tranquilo donde tu perro se siente cómodo."
    },
    {
      icon: Users,
      title: "Sin jaulas",
      description: "Espacios abiertos y cálidos donde los perros descansan y juegan libremente."
    },
    {
      icon: Star,
      title: "Clientes frecuentes",
      description: "Prioridad en reservas para quienes ya confían en nosotros."
    }
  ];

  const testimonials = [
    {
      name: "Carolina Méndez",
      pet: "Toby",
      text: "Isidora cuida a Toby como si fuera su propio perro. La confianza que tenemos es absoluta.",
      rating: 5
    },
    {
      name: "Roberto Sánchez",
      pet: "Luna",
      text: "El mejor lugar para dejar a Luna. Siempre vuelve feliz y bien cuidada. 100% recomendado.",
      rating: 5
    },
    {
      name: "María José Torres",
      pet: "Max",
      text: "Después de probar varios lugares, encontramos en Bark in Style el hogar temporal perfecto para Max.",
      rating: 5
    },
    {
      name: "Andrés Figueroa",
      pet: "Coco",
      text: "La atención es impecable. Coco adora ir y eso para nosotros es lo más importante.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Isidora y el equipo de Bark in Style"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container-narrow mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Cuidamos a tu perro con cariño real
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Más de 5 años creando un espacio tranquilo donde cada perro se siente cómodo y bien cuidado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="/#servicios">Agendar peluquería</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/hospedaje">Consultar hospedaje</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Historia / Misión */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Nuestra historia</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Nació de un amor genuino por los perros
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Bark in Style comenzó como un sueño de Isidora: crear un espacio donde los perros recibieran el mismo amor y cuidado que ella le da a los suyos. Un lugar libre de jaulas, con supervisión constante y donde cada mascota se sienta en casa.
              </p>
              <p>
                Hoy, ese sueño es una realidad. Cada día recibimos a decenas de perros que confían en nosotros para su peluquería, hospedaje y guardería. Conocemos a cada uno por su nombre, sus mañas y lo que los hace felices.
              </p>
              <p>
                Nuestra filosofía es simple: <strong className="text-foreground">tratar a cada perro como si fuera nuestro</strong>. Eso significa atención personalizada, paciencia infinita y un compromiso genuino con su bienestar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciales */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Por qué elegirnos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Lo que nos hace diferentes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonios</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Dueño/a de {testimonial.pet}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto / Cómo llegar */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Encuéntranos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Cómo llegar y contactarnos
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Información de contacto */}
            <div className="space-y-6">
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Dirección</h4>
                      <p className="text-muted-foreground">Reñaca 90, Concón, Chile</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Escríbenos por WhatsApp</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a href="mailto:hola@barkinstyle.cl" className="text-primary hover:underline">hola@barkinstyle.cl</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Horarios de atención</h4>
                      <p className="text-muted-foreground">Lunes a Viernes: 10:00 - 19:00</p>
                      <p className="text-muted-foreground">Sábados: 10:00 - 14:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button size="lg" className="w-full" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactarnos por WhatsApp
                </a>
              </Button>
            </div>
            
            {/* Mapa */}
            <div className="h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.8!2d-71.5126!3d-32.9517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689ded5c3bd48d7%3A0x0!2sRe%C3%B1aca%2090%2C%20Conc%C3%B3n%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1620000000000!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Bark in Style en Concón"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-primary/5">
        <div className="container-narrow mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Quieres conocernos?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Escríbenos para agendar o consultar. Estaremos felices de conocer a tu perro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Escribir por WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/#servicios">Ver nuestros servicios</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SobreNosotros;
