"use client";

import { useState } from "react";
import SizeSelector from "./SizeSelector";

type ProductActionsProps = {
  sizes: string[];
  productName: string;
};

export default function ProductActions({
  sizes,
  productName,
}: ProductActionsProps) {

  const [selectedSize, setSelectedSize] = useState("");

  const handleAddToCart = () => {

    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    alert(
      `Added ${productName} (${selectedSize}) to cart`
    );
  };

  return (
    <>
      <SizeSelector
        sizes={sizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />

      <button
        onClick={handleAddToCart}
        className="mt-8 bg-white text-black px-6 py-3 rounded-lg cursor-pointer"
      >
        Add To Cart
      </button>
    </>
  );
}