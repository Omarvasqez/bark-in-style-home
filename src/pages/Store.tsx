import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StoreHero from "@/components/store/StoreHero";
import StoreCollections from "@/components/store/StoreCollections";
import StoreFeatured from "@/components/store/StoreFeatured";
import StoreTrust from "@/components/store/StoreTrust";
import StoreCrossSell from "@/components/store/StoreCrossSell";
import PromoBanner from "@/components/store/PromoBanner";
import ProductCard from "@/components/store/ProductCard";
import { products, getProductsByCollection } from "@/data/products";

const Store = () => {
  const [activeCollection, setActiveCollection] = useState<string | null>(null);

  const filteredProducts = activeCollection 
    ? getProductsByCollection(activeCollection) 
    : products;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PromoBanner />
      <StoreHero />
      <StoreCollections 
        activeCollection={activeCollection} 
        onCollectionChange={setActiveCollection} 
      />
      
      {/* Products Section */}
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
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No hay productos en esta categoría aún.</p>
            </div>
          )}
        </div>
      </section>

      <StoreFeatured />
      <StoreTrust />
      <StoreCrossSell />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Store;
