import { Link } from "react-router-dom";
import { ShoppingBag, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted mt-16 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="font-playfair text-xl font-bold">Kalakriti</span>
            </div>
            <p className="text-sm text-muted-foreground font-inter">
              Bringing Indian Art to Every Home
            </p>
          </div>

          <div>
            <h3 className="font-playfair font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li><Link to="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li><Link to="/shop" className="hover:text-primary transition-colors">Pottery</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Textiles</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Home Decor</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 font-inter text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@kalakriti.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground font-inter">
          <p>&copy; {new Date().getFullYear()} Kalakriti. Supporting Indian artisans.</p>
        </div>
      </div>
    </footer>
  );
};
