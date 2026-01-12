import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Sparkles, Heart, Shield, Star } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const categories = [
  { name: "Alimentación", icon: Heart, count: 12 },
  { name: "Higiene", icon: Sparkles, count: 8 },
  { name: "Accesorios", icon: ShoppingBag, count: 15 },
  { name: "Camas y Descanso", icon: Shield, count: 6 },
];

const products = [
  { name: "Collar Premium Cuero", price: "$24.990", originalPrice: "$29.990", image: product1, badge: "Popular" },
  { name: "Shampoo Natural Orgánico", price: "$12.990", image: product2, badge: null },
  { name: "Cama Comfort Deluxe", price: "$45.990", image: product3, badge: "Nuevo" },
  { name: "Snacks Gourmet Pack", price: "$8.990", image: product4, badge: null },
  { name: "Cepillo Profesional", price: "$15.990", image: product2, badge: null },
  { name: "Correa Retráctil", price: "$18.990", originalPrice: "$22.990", image: product1, badge: "Oferta" },
  { name: "Perfume Canino Suave", price: "$9.990", image: product3, badge: null },
  { name: "Comedero Elevado", price: "$32.990", image: product4, badge: "Popular" },
];

const Store = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container-narrow mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            <ShoppingBag className="w-4 h-4" />
            Tienda Online
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestra Tienda
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Productos seleccionados y recomendados por nuestro equipo profesional. 
            Calidad garantizada para el bienestar de tu mascota.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 md:py-12">
        <div className="container-narrow mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {categories.map((category, index) => (
              <Card 
                key={index}
                className="group cursor-pointer border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {category.count} productos
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12">
        <div className="container-narrow mx-auto px-4">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Todos los productos
            </h2>
            <span className="text-muted-foreground text-sm">
              {products.length} productos
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-full ${
                      product.badge === "Oferta" 
                        ? "bg-accent text-accent-foreground" 
                        : product.badge === "Nuevo"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}>
                      {product.badge}
                    </span>
                  )}
                </div>

                <CardContent className="p-3 md:p-4">
                  <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-primary font-bold text-base md:text-lg">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-muted-foreground text-sm line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Agregar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8 md:mt-12">
            <Button variant="outline" size="lg">
              Ver más productos
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-narrow mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Productos que usamos y recomendamos
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Cada producto en nuestra tienda ha sido probado y aprobado por nuestro equipo de 
              peluqueros profesionales. Solo ofrecemos lo que usamos en nuestros servicios 
              y recomendamos a nuestros clientes.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Calidad garantizada</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <span>Productos seguros</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Uso profesional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sell CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-narrow mx-auto px-4 text-center">
          <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            ¿Quieres ver estos productos en acción?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Usamos estos mismos productos en nuestros servicios de peluquería. 
            Agenda una cita y descubre la diferencia de un cuidado profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#reservar" className="inline-flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Agendar Peluquería
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/">Volver al inicio</a>
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
