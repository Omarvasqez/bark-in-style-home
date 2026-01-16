import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const CartIcon = () => {
  const { totalItems } = useCart();

  return (
    <Link
      to="/carrito"
      className="relative p-2 hover:bg-accent rounded-lg transition-colors"
      aria-label="Ver carrito"
    >
      <ShoppingBag className="w-5 h-5" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
