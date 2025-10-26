import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Users, Palette, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-8 bg-muted">
          <div className="container">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">About Kalakriti</h1>
            <p className="font-inter text-lg text-muted-foreground">
              Our mission to empower rural artisans
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <p className="font-inter text-lg leading-relaxed mb-6">
                Kalakriti was born from a passion for preserving India's rich heritage of handmade crafts and supporting the talented artisans who create them. We believe that every handcrafted piece tells a story of tradition, skill, and dedication passed down through generations.
              </p>
              
              <p className="font-inter text-lg leading-relaxed mb-8">
                Our platform connects skilled rural artisans directly with conscious consumers who appreciate authentic, sustainable, and ethically made products. Every purchase on Kalakriti empowers an artisan family and helps preserve traditional Indian crafts for future generations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-center p-6 rounded-lg bg-muted">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2">Made with Love</h3>
                <p className="font-inter text-muted-foreground">
                  Every product is handcrafted with care and attention to detail
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-muted">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2">Supporting Artisans</h3>
                <p className="font-inter text-muted-foreground">
                  Directly empowering rural craftspeople and their families
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-muted">
                <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2">Traditional Arts</h3>
                <p className="font-inter text-muted-foreground">
                  Preserving centuries-old techniques and cultural heritage
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-muted">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2">Sustainable</h3>
                <p className="font-inter text-muted-foreground">
                  Eco-friendly practices and materials for a better tomorrow
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
