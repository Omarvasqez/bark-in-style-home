import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-narrow mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Bark in Style" className="h-12 w-12 rounded-full" />
              <span className="font-bold text-xl">Bark in Style</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Peluquería, hotel y guardería canina en Concón. 
              Cuidamos a tu mascota con amor y profesionalismo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#servicios" className="hover:text-primary-foreground transition-colors">Peluquería</a></li>
              <li><a href="#servicios" className="hover:text-primary-foreground transition-colors">Hotel</a></li>
              <li><a href="#servicios" className="hover:text-primary-foreground transition-colors">Guardería</a></li>
              <li><a href="#tienda" className="hover:text-primary-foreground transition-colors">Tienda</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Reñaca 90, Concón, Chile</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>Lun - Vie: 10:00 a 19:00</span>
                  <span>Sábados: 10:00 a 14:00</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hola@barkinstyle.cl</span>
              </li>
            </ul>
            {/* Social */}
            <div className="flex gap-4 mt-4">
              <a 
                href="https://instagram.com/barkinstyle.cl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>© 2024 Bark in Style. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
