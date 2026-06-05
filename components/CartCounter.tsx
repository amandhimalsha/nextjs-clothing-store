"use client"; //tells next.js that this component runs in browser

import { useState } from "react";

export default function CartCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">

      <p>Cart: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-white text-black px-4 py-2 rounded cursor-pointer"
      >
        Add Item
      </button>

    </div>
  );
}