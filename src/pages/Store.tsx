import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Shield, Clock, Star, CheckCircle, Dog, Scissors } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const featuredProduct = {
  name: "Kit Spa Completo",
  description: "Todo lo que necesitas para mantener a tu perro impecable entre sesiones de peluquería.",
  price: "$34.990",
  originalPrice: "$45.990",
  image: product3,
  urgency: "Solo 8 unidades disponibles",
  includes: ["Shampoo natural", "Acondicionador suave", "Cepillo profesional"],
};

const products = [
  { 
    name: "Shampoo Suave Natural", 
    price: "$12.990", 
    image: product2,
    purpose: "Limpieza profunda sin irritar la piel",
    dogType: "Ideal para pieles sensibles",
    whyRecommend: "Lo usamos en cada sesión de peluquería. Deja el pelo suave y brillante.",
  },
  { 
    name: "Collar Premium Cuero", 
    price: "$24.990", 
    image: product1,
    purpose: "Comodidad y estilo diario",
    dogType: "Razas medianas y grandes",
    whyRecommend: "Duradero, cómodo y elegante. Nuestros clientes lo aman.",
  },
  { 
    name: "Snacks Gourmet Naturales", 
    price: "$8.990", 
    image: product4,
    purpose: "Premios saludables para entrenamiento",
    dogType: "Todas las razas y tamaños",
    whyRecommend: "Los usamos para calmar y premiar durante el grooming.",
  },
  { 
    name: "Cepillo Profesional", 
    price: "$15.990", 
    image: product2,
    purpose: "Cepillado diario sin enredos",
    dogType: "Pelo largo y medio",
    whyRecommend: "El mismo que usamos en nuestro salón. Resultados profesionales en casa.",
  },
];

const Store = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Clean & Emotional */}
      <section className="pt-24 pb-10 md:pt-32 md:pb-14 bg-gradient-to-b from-secondary/40 to-background">
        <div className="container-narrow mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium text-sm px-4 py-2 rounded-full mb-6">
            <CheckCircle className="w-4 h-4" />
            Probados por profesionales
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Productos que usamos<br className="hidden md:block" /> y recomendamos
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Una selección curada de lo mejor para tu mascota. 
            Todo lo que vendemos, lo usamos primero en nuestros servicios.
          </p>
        </div>
      </section>

      {/* Featured / Campaign Section */}
      <section className="py-8 md:py-12">
        <div className="container-narrow mx-auto px-4">
          <Card className="overflow-hidden border-0 shadow-[var(--shadow-elevated)] bg-gradient-to-br from-primary/5 via-background to-accent/10">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-square md:aspect-auto overflow-hidden">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Oferta limitada
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6 md:p-10 flex flex-col justify-center">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                  Destacado del mes
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {featuredProduct.name}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {featuredProduct.description}
                </p>

                {/* Includes */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-foreground mb-2">Incluye:</p>
                  <ul className="space-y-1">
                    {featuredProduct.includes.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-primary">{featuredProduct.price}</span>
                  <span className="text-lg text-muted-foreground line-through">{featuredProduct.originalPrice}</span>
                  <span className="bg-accent/20 text-accent-foreground px-2 py-1 rounded text-xs font-semibold">
                    -22%
                  </span>
                </div>

                <p className="text-accent-foreground text-sm font-medium mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {featuredProduct.urgency}
                </p>

                <Button size="lg" className="w-full md:w-auto">
                  Comprar ahora
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-10 md:py-16">
        <div className="container-narrow mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nuestra selección
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-3">
              Lo que usamos, lo que recomendamos
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Cada producto ha sido probado en nuestro salón y aprobado por nuestros clientes peludos.
            </p>
          </div>

          {/* Products Grid - Larger Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
              >
                <div className="grid grid-cols-5 gap-0">
                  {/* Image - Takes 2 columns */}
                  <div className="col-span-2 relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content - Takes 3 columns */}
                  <CardContent className="col-span-3 p-4 md:p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-foreground text-base md:text-lg mb-2">
                        {product.name}
                      </h3>
                      
                      {/* Purpose */}
                      <div className="flex items-start gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{product.purpose}</p>
                      </div>

                      {/* Dog Type */}
                      <div className="flex items-start gap-2 mb-2">
                        <Dog className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{product.dogType}</p>
                      </div>

                      {/* Why Recommend */}
                      <div className="bg-secondary/50 rounded-lg p-3 mt-3">
                        <p className="text-sm text-foreground italic">
                          "{product.whyRecommend}"
                        </p>
                        <p className="text-xs text-primary font-medium mt-1">— Equipo Bark in Style</p>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                      <Button size="sm">
                        Agregar
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              ¿Tienes dudas sobre algún producto? Escríbenos
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-narrow mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Scissors className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Usamos estos productos en nuestros servicios
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              No vendemos por vender. Cada producto que ofrecemos lo hemos probado 
              en nuestro salón de peluquería, hotel y guardería. Si funciona para 
              nuestros clientes peludos, lo compartimos contigo.
            </p>
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Probados</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Seguros</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Recomendados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sell CTA */}
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

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Store;
