import { Link } from "react-router-dom";
import potteryImg from "@/assets/category-pottery.jpg";
import jewelryImg from "@/assets/category-jewelry.jpg";
import textilesImg from "@/assets/category-textiles.jpg";
import homeDecorImg from "@/assets/category-home-decor.jpg";

const categories = [
  { name: "Pottery", image: potteryImg, description: "Traditional clay crafts" },
  { name: "Jewelry", image: jewelryImg, description: "Handcrafted ornaments" },
  { name: "Textiles", image: textilesImg, description: "Woven treasures" },
  { name: "Home Decor", image: homeDecorImg, description: "Artisan decoratives" },
];

export const Categories = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="font-playfair text-4xl font-bold text-center mb-12">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to="/shop"
              className="group relative overflow-hidden rounded-lg aspect-square hover-scale"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-playfair text-2xl font-bold mb-1">{category.name}</h3>
                <p className="font-inter text-sm opacity-90">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
