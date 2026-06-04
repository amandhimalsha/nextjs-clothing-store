import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center text-center py-24 md:py-32 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
         Elevate Your Style
        </h1>

        <p className="text-base md:text-lg max-w-xl mb-6">
          Discover modern oversized fashion designed for comfort and confidence.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Shop Now
       </button>
      </section>
      <section className="px-6 pb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}