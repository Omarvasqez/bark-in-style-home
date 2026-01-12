import { CheckCircle } from "lucide-react";

const StoreHero = () => {
  return (
    <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-gradient-to-b from-secondary/40 to-background">
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
  );
};

export default StoreHero;
