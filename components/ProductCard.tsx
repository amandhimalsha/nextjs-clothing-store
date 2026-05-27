import Image from "next/image";

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({
  name,
  price,
    image,
}: ProductCardProps) {
  return (
    <div className="border border-gray-700 rounded-xl overflow-hidden hover:scale-105 transition duration-300">
        
        <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        className="w-full h-64 object-cover"
        />

        <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
            {name}
        </h2>

        <p className="mb-4">
            LKR {price}
        </p>

        <button className="bg-white text-black px-4 py-2 rounded-lg">
            Add to Cart
        </button>
        </div>
    </div>
    );
}