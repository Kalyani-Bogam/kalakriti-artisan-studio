import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { fetchProductByHandle } from "@/lib/shopifyApi";
import { useCartStore } from "@/stores/cartStore";
import { ShoppingCart, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const addItem = useCartStore(state => state.addItem);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", handle],
    queryFn: () => fetchProductByHandle(handle!),
    enabled: !!handle,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-playfair text-2xl font-semibold mb-2">Product not found</h2>
            <p className="font-inter text-muted-foreground">The product you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { node } = product;
  const selectedVariant = node.variants.edges[selectedVariantIndex]?.node;

  const handleAddToCart = () => {
    if (!selectedVariant) {
      toast.error("Please select a variant");
      return;
    }

    const cartItem = {
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${node.title} has been added to your cart.`,
      position: "top-center",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                {node.images.edges[0] ? (
                  <img
                    src={node.images.edges[0].node.url}
                    alt={node.images.edges[0].node.altText || node.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ShoppingCart className="w-24 h-24 text-muted-foreground" />
                  </div>
                )}
              </div>
              
              {node.images.edges.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {node.images.edges.slice(1, 5).map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg bg-muted">
                      <img
                        src={image.node.url}
                        alt={image.node.altText || node.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h1 className="font-playfair text-4xl font-bold mb-4">{node.title}</h1>
              
              <div className="mb-6">
                <p className="font-inter text-3xl font-bold text-primary">
                  {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount || "0").toFixed(2)}
                </p>
              </div>

              <div className="prose max-w-none mb-8">
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {node.description || "No description available."}
                </p>
              </div>

              {node.variants.edges.length > 1 && (
                <div className="mb-6">
                  <label className="font-inter font-semibold mb-3 block">Select Option</label>
                  <div className="flex flex-wrap gap-2">
                    {node.variants.edges.map((variant, index) => (
                      <Button
                        key={variant.node.id}
                        variant={selectedVariantIndex === index ? "default" : "outline"}
                        onClick={() => setSelectedVariantIndex(index)}
                        className="font-inter"
                      >
                        {variant.node.title}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <Button
                size="lg"
                onClick={handleAddToCart}
                className="w-full font-inter text-lg"
                disabled={!selectedVariant?.availableForSale}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {selectedVariant?.availableForSale ? "Add to Cart" : "Out of Stock"}
              </Button>

              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="font-playfair font-semibold mb-3">Product Details</h3>
                <ul className="font-inter text-sm space-y-2 text-muted-foreground">
                  <li>• Handmade by skilled Indian artisans</li>
                  <li>• Authentic traditional craftsmanship</li>
                  <li>• Supports rural artisan communities</li>
                  <li>• Eco-friendly and sustainable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
