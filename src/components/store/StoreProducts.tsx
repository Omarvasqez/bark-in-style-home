import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Dog, ShoppingBag } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

// Products structure - ready to be replaced with Shopify API data
const products = [
  { 
    id: "1",
    name: "Shampoo Suave Natural", 
    price: "$12.990", 
    image: product2,
    collection: "cuidado-diario",
    purpose: "Limpieza profunda sin irritar la piel",
    dogType: "Ideal para pieles sensibles",
    whyRecommend: "Lo usamos en cada sesión de peluquería.",
  },
  { 
    id: "2",
    name: "Arnés Premium Acolchado", 
    price: "$24.990", 
    image: product1,
    collection: "paseo-arneses",
    purpose: "Comodidad y control en paseos",
    dogType: "Razas medianas y grandes",
    whyRecommend: "Duradero, cómodo y elegante.",
  },
  { 
    id: "3",
    name: "Snacks Gourmet Naturales", 
    price: "$8.990", 
    image: product4,
    collection: "snacks-premios",
    purpose: "Premios saludables para entrenamiento",
    dogType: "Todas las razas y tamaños",
    whyRecommend: "Los usamos para premiar en el grooming.",
  },
  { 
    id: "4",
    name: "Cepillo Profesional", 
    price: "$15.990", 
    image: product2,
    collection: "cuidado-diario",
    purpose: "Cepillado diario sin enredos",
    dogType: "Pelo largo y medio",
    whyRecommend: "El mismo que usamos en el salón.",
  },
  { 
    id: "5",
    name: "Cama Ortopédica Premium", 
    price: "$45.990", 
    image: product3,
    collection: "descanso-camas",
    purpose: "Descanso óptimo para articulaciones",
    dogType: "Perros senior o con problemas articulares",
    whyRecommend: "Ideal para el descanso post-grooming.",
  },
  { 
    id: "6",
    name: "Correa Retráctil 5m", 
    price: "$18.990", 
    image: product1,
    collection: "paseo-arneses",
    purpose: "Libertad controlada en paseos",
    dogType: "Todas las razas",
    whyRecommend: "Perfecta para paseos seguros.",
  },
];

interface StoreProductsProps {
  activeCollection: string | null;
}

const StoreProducts = ({ activeCollection }: StoreProductsProps) => {
  const filteredProducts = activeCollection 
    ? products.filter(p => p.collection === activeCollection)
    : products;

  return (
    <section className="py-8 md:py-12">
      <div className="container-narrow mx-auto px-4">
        <div className="text-center mb-8">
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

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id}
              className="group overflow-hidden border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <CardContent className="p-4 md:p-5">
                <h3 className="font-bold text-foreground text-base md:text-lg mb-3 line-clamp-1">
                  {product.name}
                </h3>
                
                {/* Purpose */}
                <div className="flex items-start gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground line-clamp-1">{product.purpose}</p>
                </div>

                {/* Dog Type */}
                <div className="flex items-start gap-2 mb-3">
                  <Dog className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground line-clamp-1">{product.dogType}</p>
                </div>

                {/* Why Recommend */}
                <div className="bg-secondary/50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-foreground italic line-clamp-2">
                    "{product.whyRecommend}"
                  </p>
                  <p className="text-xs text-primary font-medium mt-1">— Bark in Style</p>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  <Button size="sm" className="gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Agregar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No hay productos en esta categoría aún.</p>
          </div>
        )}

        {/* WhatsApp CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            ¿Tienes dudas sobre algún producto?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer">
              Consultar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoreProducts;
