import { Shield, Heart, Star, Scissors } from "lucide-react";

const StoreTrust = () => {
  return (
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
  );
};

export default StoreTrust;
