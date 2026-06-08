"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <main className="px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">
            Your Cart
        </h1>

        {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
        ) : (
            <div className="space-y-4">
            {cartItems.map((item, index) => (
                <div
                key={index}
                className="border p-4 rounded-lg"
                >
                <h2 className="font-semibold">
                    {item.name}
                </h2>

                <p>Size: {item.size}</p>
                </div>
            ))}
            </div>
        )}
    </main>
  );
}