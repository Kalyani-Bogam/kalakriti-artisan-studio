import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Footer } from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/shopifyApi";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(8),
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <Categories />

        <section className="py-16 bg-muted">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-playfair text-4xl font-bold mb-2">Featured Products</h2>
                <p className="font-inter text-muted-foreground">Handpicked treasures from our artisans</p>
              </div>
              <Link to="/shop">
                <Button variant="outline" className="font-inter">
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {products && products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.slice(0, 8).map((product) => (
                  <ProductCard key={product.node.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="font-inter text-muted-foreground mb-4">
                  No products available yet. Stay tuned for our beautiful collection!
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="py-16">
          <div className="container text-center max-w-3xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold mb-6">Our Mission</h2>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-8">
              At Kalakriti, we're passionate about preserving India's rich heritage of handmade crafts. 
              Every purchase empowers rural artisans and helps sustain traditional craftsmanship for 
              future generations. We bridge the gap between talented craftspeople and conscious consumers 
              who value authenticity, sustainability, and cultural heritage.
            </p>
            <Link to="/about">
              <Button size="lg" className="font-inter">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
