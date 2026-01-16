import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

export interface ProductVariantOption {
  name: string;
  values: string[];
}

export interface Product {
  id: string;
  handle: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  collection: string;
  description: string;
  shortDescription: string;
  dogType: string;
  whyRecommend: string;
  type: "simple" | "variant" | "bundle";
  variants?: ProductVariantOption[];
  bundleProducts?: string[];
  stock: number;
}

// Products data - ready to be replaced with Shopify API data
export const products: Product[] = [
  {
    id: "arnes-acolchado",
    handle: "arnes-acolchado",
    name: "Arnés Acolchado Respirable",
    price: 24990,
    images: [product1, product2, product3],
    collection: "paseo-arneses",
    description: "Arnés diseñado para la comodidad de tu perro durante paseos largos. Fabricado con materiales transpirables que evitan rozaduras y distribuyen la presión de manera uniforme. El sistema de ajuste permite un calce perfecto y seguro.\n\nCaracterísticas:\n• Material mesh transpirable\n• Acolchado suave en pecho\n• Reflectantes para visibilidad nocturna\n• Anilla de acero inoxidable\n• Fácil de poner y quitar",
    shortDescription: "Comodidad y control en cada paseo",
    dogType: "Razas medianas y grandes",
    whyRecommend: "Duradero, cómodo y muy fácil de poner. Lo probamos con nuestros clientes más inquietos.",
    type: "variant",
    variants: [
      { name: "Talla", values: ["S", "M", "L", "XL"] },
      { name: "Color", values: ["Negro", "Azul", "Rojo", "Verde"] },
    ],
    stock: 25,
  },
  {
    id: "shampoo-suave",
    handle: "shampoo-suave-natural",
    name: "Shampoo Suave Natural",
    price: 12990,
    images: [product2, product4],
    collection: "cuidado-diario",
    description: "Shampoo formulado con ingredientes naturales que limpian profundamente sin irritar la piel sensible. pH balanceado especialmente para perros, deja el pelo suave, brillante y con un aroma fresco que dura.\n\nIngredientes destacados:\n• Aloe vera orgánico\n• Avena coloidal\n• Aceite de coco\n• Extracto de manzanilla\n• Sin parabenos ni sulfatos",
    shortDescription: "Limpieza profunda sin irritar la piel",
    dogType: "Ideal para pieles sensibles",
    whyRecommend: "Lo usamos en cada sesión de peluquería. Deja el pelo increíble.",
    type: "simple",
    stock: 42,
  },
  {
    id: "pack-spa-completo",
    handle: "pack-spa-completo",
    name: "Pack Spa Completo",
    price: 34990,
    compareAtPrice: 45990,
    images: [product3, product2, product4],
    collection: "ofertas",
    description: "Todo lo que necesitas para mantener a tu perro impecable entre sesiones de peluquería. Este pack incluye nuestros productos más queridos a un precio especial.\n\nEl pack incluye:\n• Shampoo Suave Natural (250ml)\n• Acondicionador Desenredante (200ml)\n• Cepillo Profesional doble cara\n• Toalla de microfibra absorbente\n• Spray perfumado suave",
    shortDescription: "Todo para el cuidado completo de tu perro",
    dogType: "Todas las razas y tamaños",
    whyRecommend: "Nuestro pack más vendido. Tiene todo lo esencial para el cuidado en casa.",
    type: "bundle",
    bundleProducts: ["Shampoo Suave Natural", "Acondicionador Desenredante", "Cepillo Profesional", "Toalla Microfibra", "Spray Perfumado"],
    stock: 15,
  },
  {
    id: "snacks-naturales",
    handle: "snacks-gourmet-naturales",
    name: "Snacks Gourmet Naturales",
    price: 8990,
    images: [product4, product1],
    collection: "snacks-premios",
    description: "Premios saludables y deliciosos para recompensar a tu perro. Elaborados con ingredientes 100% naturales, sin conservantes artificiales ni colorantes.\n\nBeneficios:\n• Alto en proteína\n• Bajo en grasas\n• Sin gluten\n• Ideal para entrenamiento\n• Tamaño perfecto para premiar",
    shortDescription: "Premios saludables para entrenamiento",
    dogType: "Todas las razas y tamaños",
    whyRecommend: "Los usamos para premiar durante el grooming. ¡Les encantan!",
    type: "simple",
    stock: 60,
  },
  {
    id: "cepillo-profesional",
    handle: "cepillo-profesional",
    name: "Cepillo Profesional Doble Cara",
    price: 15990,
    images: [product2, product3],
    collection: "cuidado-diario",
    description: "Cepillo de calidad profesional con doble función: un lado con cerdas suaves para desenredar y otro con púas metálicas para remover pelo suelto.\n\nCaracterísticas:\n• Mango ergonómico antideslizante\n• Cerdas suaves en un lado\n• Púas metálicas redondeadas en el otro\n• Ideal para uso diario\n• Reduce pelo en muebles",
    shortDescription: "Cepillado diario sin enredos",
    dogType: "Pelo largo y medio",
    whyRecommend: "El mismo que usamos en el salón. Duradero y efectivo.",
    type: "simple",
    stock: 30,
  },
  {
    id: "cama-ortopedica",
    handle: "cama-ortopedica",
    name: "Cama Ortopédica Confort",
    price: 45990,
    images: [product3, product1],
    collection: "descanso-camas",
    description: "Cama con espuma de memoria que se adapta al cuerpo de tu perro, aliviando la presión en articulaciones. Perfecta para perros mayores o con problemas articulares.\n\nCaracterísticas:\n• Espuma viscoelástica de alta densidad\n• Funda removible y lavable\n• Base antideslizante\n• Bordes elevados para apoyo\n• Resistente al agua",
    shortDescription: "Descanso óptimo para articulaciones",
    dogType: "Perros senior o con problemas articulares",
    whyRecommend: "Ideal para el descanso post-grooming. Tus perros lo merecen.",
    type: "variant",
    variants: [
      { name: "Talla", values: ["M", "L", "XL"] },
      { name: "Color", values: ["Gris", "Beige", "Café"] },
    ],
    stock: 12,
  },
];

export const getProductByHandle = (handle: string): Product | undefined => {
  return products.find((p) => p.handle === handle);
};

export const getProductsByCollection = (collection: string): Product[] => {
  if (!collection) return products;
  return products.filter((p) => p.collection === collection);
};

export const formatPrice = (price: number): string => {
  return `$${price.toLocaleString("es-CL")}`;
};
