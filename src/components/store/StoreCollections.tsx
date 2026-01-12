import { Card, CardContent } from "@/components/ui/card";
import { Dog, Cookie, Bed, Sparkles } from "lucide-react";
import { useState } from "react";

// Shopify collection structure - ready to be replaced with API data
const collections = [
  { 
    id: "paseo-arneses",
    name: "Paseo y arneses", 
    icon: Dog, 
    description: "Collares, correas y arneses",
    productCount: 12
  },
  { 
    id: "snacks-premios",
    name: "Snacks y premios", 
    icon: Cookie, 
    description: "Premios saludables",
    productCount: 8
  },
  { 
    id: "descanso-camas",
    name: "Descanso y camas", 
    icon: Bed, 
    description: "Camas y mantas",
    productCount: 6
  },
  { 
    id: "cuidado-diario",
    name: "Cuidado diario", 
    icon: Sparkles, 
    description: "Higiene y bienestar",
    productCount: 15
  },
];

interface StoreCollectionsProps {
  activeCollection: string | null;
  onCollectionChange: (collectionId: string | null) => void;
}

const StoreCollections = ({ activeCollection, onCollectionChange }: StoreCollectionsProps) => {
  return (
    <section className="py-6 md:py-10">
      <div className="container-narrow mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">
            Explora por categoría
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {collections.map((collection) => {
            const isActive = activeCollection === collection.id;
            return (
              <Card 
                key={collection.id}
                onClick={() => onCollectionChange(isActive ? null : collection.id)}
                className={`group cursor-pointer border-0 transition-all duration-300 hover:-translate-y-1 ${
                  isActive 
                    ? 'shadow-[var(--shadow-elevated)] ring-2 ring-primary bg-primary/5' 
                    : 'shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)]'
                }`}
              >
                <CardContent className="p-4 md:p-5 text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center transition-colors ${
                    isActive ? 'bg-primary text-primary-foreground' : 'bg-primary/10 group-hover:bg-primary/20'
                  }`}>
                    <collection.icon className={`w-6 h-6 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base">{collection.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{collection.description}</p>
                  <span className="inline-block mt-2 text-xs text-primary font-medium">
                    {collection.productCount} productos
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* All products chip */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => onCollectionChange(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCollection === null 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Ver todos los productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoreCollections;
