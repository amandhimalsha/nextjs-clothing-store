import { products } from "@/data/products";
import Image from "next/image";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = products.find(
  (product) => product.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <main className="max-w-5xl mx-auto px-8 py-20">

      <div className="grid md:grid-cols-2 gap-10">

        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="rounded-xl"
        />

        <div>

          <h1 className="text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-2xl mb-6">
            LKR {product.price}
          </p>

          <p className="text-gray-400">
            {product.description}
          </p>

        </div>

      </div>

    </main>
  );
}