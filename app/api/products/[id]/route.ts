import { products } from "@/data/products";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  const { id } = await params;

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return Response.json(
      {
        message: "Product not found",
      },
      {
        status: 404,
      }
    );
  }

  return Response.json(product);
}