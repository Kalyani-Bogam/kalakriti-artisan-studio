import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-crafts.jpg";

export const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>
      
      <div className="relative z-10 container text-center text-white px-4">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Kalakriti
        </h1>
        <p className="font-playfair text-2xl md:text-3xl mb-4 italic animate-fade-in">
          The Art of Handmade India
        </p>
        <p className="font-inter text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
          Bringing Indian Art to Every Home
        </p>
        <div className="flex gap-4 justify-center animate-fade-in">
          <Link to="/shop">
            <Button size="lg" className="font-inter text-lg">
              Shop Now
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="font-inter text-lg bg-white/10 backdrop-blur-sm border-white hover:bg-white hover:text-foreground">
              Our Story
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
