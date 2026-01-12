import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "56912345678"; // Replace with actual number
  const message = encodeURIComponent("Hola! Me gustaría agendar una cita para mi mascota.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <Button variant="whatsapp" size="floating" className="animate-float">
        <MessageCircle className="w-7 h-7" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
