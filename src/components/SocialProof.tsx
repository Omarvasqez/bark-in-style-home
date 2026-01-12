import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Carolina M.",
    text: "Excelente atención y mi perrito quedó hermoso. Se nota el cariño con que trabajan.",
    rating: 5,
  },
  {
    name: "Felipe R.",
    text: "Dejé a mi mascota en el hotel por una semana y me mandaban fotos todos los días. Total tranquilidad.",
    rating: 5,
  },
  {
    name: "Andrea P.",
    text: "La guardería es espectacular. Mi cachorro llega feliz y cansado. Muy recomendado.",
    rating: 5,
  },
];

const SocialProof = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-primary font-semibold">5.0 en Google</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary fill-primary" />
              ))}
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Más de 200 mascotas felices
          </h2>
          <p className="text-muted-foreground">
            La confianza de nuestra comunidad nos respalda
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="glass-card hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">{review.name}</span>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
