import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import type { ShopifyProduct } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;

  const handleAddToCart = () => {
    const defaultVariant = node.variants.edges[0]?.node;
    
    if (!defaultVariant) {
      toast.error("Product unavailable");
      return;
    }

    const cartItem = {
      product,
      variantId: defaultVariant.id,
      variantTitle: defaultVariant.title,
      price: defaultVariant.price,
      quantity: 1,
      selectedOptions: defaultVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${node.title} has been added to your cart.`,
      position: "top-center",
    });
  };

  const price = parseFloat(node.priceRange.minVariantPrice.amount);
  const currency = node.priceRange.minVariantPrice.currencyCode;

  return (
    <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
      <Link to={`/product/${node.handle}`}>
        <div className="aspect-square overflow-hidden">
          {node.images.edges[0] ? (
            <img
              src={node.images.edges[0].node.url}
              alt={node.images.edges[0].node.altText || node.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <ShoppingCart className="w-16 h-16 text-muted-foreground" />
            </div>
          )}
        </div>
      </Link>
      
      <CardContent className="p-4">
        <Link to={`/product/${node.handle}`}>
          <h3 className="font-playfair text-lg font-semibold mb-2 line-clamp-1 hover:text-primary transition-colors">
            {node.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3 font-inter">
          {node.description}
        </p>
        <p className="font-inter text-xl font-bold text-primary">
          {currency} {price.toFixed(2)}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full font-inter"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
