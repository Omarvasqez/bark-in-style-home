import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Carolina M.",
    text: "Excelente atención y mi perrito quedó hermoso. Se nota el cariño con que trabajan.",
    rating: 5,
    timeAgo: "hace 2 semanas",
  },
  {
    name: "Felipe R.",
    text: "Dejé a mi mascota en el hotel por una semana y me mandaban fotos todos los días. Total tranquilidad.",
    rating: 5,
    timeAgo: "hace 1 mes",
  },
  {
    name: "Andrea P.",
    text: "La guardería es espectacular. Mi cachorro llega feliz y cansado. Muy recomendado.",
    rating: 5,
    timeAgo: "hace 3 semanas",
  },
  {
    name: "Javiera S.",
    text: "Siempre dejo a mi golden aquí. El trato es increíble y los cortes quedan perfectos.",
    rating: 5,
    timeAgo: "hace 2 meses",
  },
  {
    name: "Tomás L.",
    text: "Mi perro es muy nervioso y aquí lo tratan con mucha paciencia. Totalmente recomendado.",
    rating: 5,
    timeAgo: "hace 1 mes",
  },
  {
    name: "Constanza V.",
    text: "El hospedaje es de primera. Me enviaron videos de mi perrita jugando todo el día. Volveremos siempre.",
    rating: 5,
    timeAgo: "hace 3 meses",
  },
];

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/EVy8LvPjyEuqByC5A";

const SocialProof = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  const getVisibleReviews = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + reviews.length) % reviews.length);
    }
    return indices;
  };

  return (
    <section className="section-padding bg-muted overflow-hidden">
      <div className="container-narrow mx-auto">
        {/* Header with Google Badge */}
        <div className="text-center mb-10">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-card border rounded-full px-5 py-3 mb-5 hover:shadow-md transition-shadow"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">4.8</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < 5 ? "text-[#FBBC05] fill-[#FBBC05]" : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">en Google</span>
            </div>
          </a>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground">
            Reseñas reales de nuestra comunidad en Google Maps
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Mobile: single card */}
          <div className="md:hidden">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(reviews[current].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FBBC05] fill-[#FBBC05]" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  "{reviews[current].text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-foreground block">
                      {reviews[current].name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {reviews[current].timeAgo}
                    </span>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 opacity-40" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Desktop: 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {getVisibleReviews().map((index) => (
              <Card
                key={`${index}-${current}`}
                className="glass-card hover:shadow-[var(--shadow-elevated)] transition-all duration-500"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(reviews[index].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#FBBC05] fill-[#FBBC05]" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed">
                    "{reviews[index].text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-foreground block">
                        {reviews[index].name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {reviews[index].timeAgo}
                      </span>
                    </div>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 opacity-40" aria-hidden="true">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              onClick={prev}
              aria-label="Reseña anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir a reseña ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              onClick={next}
              aria-label="Siguiente reseña"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* CTA */}
          <div className="text-center mt-6">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline font-medium"
            >
              Ver todas las reseñas en Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
