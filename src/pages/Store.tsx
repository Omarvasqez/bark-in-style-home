import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StoreHero from "@/components/store/StoreHero";
import StoreCollections from "@/components/store/StoreCollections";
import StoreFeatured from "@/components/store/StoreFeatured";
import StoreProducts from "@/components/store/StoreProducts";
import StoreTrust from "@/components/store/StoreTrust";
import StoreCrossSell from "@/components/store/StoreCrossSell";

const Store = () => {
  const [activeCollection, setActiveCollection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StoreHero />
      <StoreCollections 
        activeCollection={activeCollection} 
        onCollectionChange={setActiveCollection} 
      />
      <StoreFeatured />
      <StoreProducts activeCollection={activeCollection} />
      <StoreTrust />
      <StoreCrossSell />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Store;
