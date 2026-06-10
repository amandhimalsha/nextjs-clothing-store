import { products } from "@/data/products";

export async function GET() {
  return Response.json(products);
}

export async function POST(
  request: Request
) {
  const body = await request.json();

  return Response.json({
    message: "Product created",
    product: body,
  });
}