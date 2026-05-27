type ProductCardProps = {
  name: string;
  price: number;
};

export default function ProductCard({
  name,
  price,
}: ProductCardProps) {
  return (
    <div className="border border-gray-700 p-4 rounded-xl">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>

      <p>LKR {price}</p>
    </div>
  );
}