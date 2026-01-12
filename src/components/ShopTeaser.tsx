import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    name: "Collar Premium",
    price: "$24.990",
    image: product1,
  },
  {
    name: "Shampoo Natural",
    price: "$12.990",
    image: product2,
  },
  {
    name: "Cama Comfort",
    price: "$45.990",
    image: product3,
  },
  {
    name: "Snacks Gourmet",
    price: "$8.990",
    image: product4,
  },
];

const ShopTeaser = () => {
  return (
    <section id="tienda" className="section-padding">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Tienda Online
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Productos recomendados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seleccionamos los mejores productos para el bienestar de tu mascota.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                  {product.name}
                </h3>
                <p className="text-primary font-bold">
                  {product.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="/tienda" className="inline-flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Ver toda la tienda
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopTeaser;
