import { useQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { fetchProducts } from "@/lib/shopifyApi";
import { Loader2 } from "lucide-react";

const Shop = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(20),
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-8 bg-muted">
          <div className="container">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Our Collection</h1>
            <p className="font-inter text-lg text-muted-foreground">
              Discover authentic handmade crafts from talented Indian artisans
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : products && products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.node.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h2 className="font-playfair text-2xl font-semibold mb-4">No products found</h2>
                <p className="font-inter text-muted-foreground">
                  Products will appear here once you add them to your store.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
