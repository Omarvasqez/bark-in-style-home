import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, Tag } from "lucide-react";
import product3 from "@/assets/product-3.jpg";

// Featured campaign - ready to be connected to Shopify featured collection
const featuredCampaign = {
  collectionHandle: "ofertas-del-mes", // Shopify collection handle
  title: "Ofertas del Mes",
  subtitle: "Productos seleccionados con descuento especial",
  endDate: "31 de enero",
  product: {
    name: "Kit Spa Completo",
    description: "Todo lo que necesitas para mantener a tu perro impecable entre sesiones de peluquería.",
    price: "$34.990",
    originalPrice: "$45.990",
    discount: "22%",
    image: product3,
    stock: 8,
    includes: ["Shampoo natural", "Acondicionador suave", "Cepillo profesional"],
  }
};

const StoreFeatured = () => {
  return (
    <section className="py-6 md:py-10">
      <div className="container-narrow mx-auto px-4">
        {/* Campaign Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-accent" />
            <span className="font-semibold text-foreground">{featuredCampaign.title}</span>
          </div>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Clock className="w-4 h-4" />
            Hasta {featuredCampaign.endDate}
          </span>
        </div>

        <Card className="overflow-hidden border-0 shadow-[var(--shadow-elevated)] bg-gradient-to-br from-accent/5 via-background to-primary/5">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-square md:aspect-auto overflow-hidden">
              <img
                src={featuredCampaign.product.image}
                alt={featuredCampaign.product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                -{featuredCampaign.product.discount}
              </div>
            </div>

            {/* Content */}
            <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                Destacado del mes
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {featuredCampaign.product.name}
              </h2>
              <p className="text-muted-foreground mb-4">
                {featuredCampaign.product.description}
              </p>

              {/* Includes */}
              <div className="mb-6">
                <p className="text-sm font-medium text-foreground mb-2">Incluye:</p>
                <ul className="space-y-1.5">
                  {featuredCampaign.product.includes.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-bold text-primary">{featuredCampaign.product.price}</span>
                <span className="text-lg text-muted-foreground line-through">{featuredCampaign.product.originalPrice}</span>
              </div>

              <p className="text-accent-foreground text-sm font-medium mb-5 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Solo {featuredCampaign.product.stock} unidades disponibles
              </p>

              <Button size="lg" className="w-full md:w-auto">
                Comprar ahora
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default StoreFeatured;
