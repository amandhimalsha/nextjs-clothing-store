"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );  

  return (
    <main className="px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">
            Your Cart
        </h1>


        <button
            onClick={clearCart}
            className="mb-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded cursor-pointer transition"
        >
            Clear Cart
        </button>


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


                <button
                    onClick={() => removeFromCart(index)}
                    className="mt-3 bg-red-500 hover:bg-red-900 text-white px-4 py-2 rounded cursor-pointer transition"
                    >
                    Remove
                </button>

                </div>

                
            ))}

            <div className="mt-8 border-t pt-4">
                <h2 className="text-2xl font-bold">
                    Total: LKR {totalPrice}
                </h2>
            </div>

            </div>
        )}
    </main>
  );
}