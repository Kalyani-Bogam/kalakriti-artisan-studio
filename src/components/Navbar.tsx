import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { CartDrawer } from "./CartDrawer";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6 text-primary" />
          <span className="font-playfair text-2xl font-bold text-foreground">Kalakriti</span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link to="/">
            <Button variant="ghost" className="font-inter">Home</Button>
          </Link>
          <Link to="/shop">
            <Button variant="ghost" className="font-inter">Shop</Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost" className="font-inter">About</Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" className="font-inter">Contact</Button>
          </Link>
          <CartDrawer />
        </div>
      </nav>
    </header>
  );
};
