import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return {
      title: "Product Not Found | AURORA",
    };
  }

  return {
    title: `${product.name} | AURORA`,
    description: product.description,
  };
}

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  // to show the loading state, i added a delay
  await new Promise((resolve) =>
    setTimeout(resolve, 3000)
  );

  const product = products.find(
  (product) => product.id === Number(id)
  );

  if (!product) {
    notFound();
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

          <p className="text-gray-400 mb-4">
            Category: {product.category}
          </p>

          <p className="text-gray-400">
            {product.description}
          </p>

          <div className="mt-8">

              <h3 className="text-lg font-semibold mb-3">
                Available Sizes
              </h3>

              <div className="flex gap-3">

                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="border border-gray-600 px-4 py-2 rounded-lg"
                  >
                    {size}
                  </button>
                ))}

              </div>

          </div>

          <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold">
            Add To Cart
          </button>

        </div>

      </div>

    </main>
  );
}