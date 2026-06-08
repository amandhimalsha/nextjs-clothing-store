"use client";

import { useState } from "react";
import SizeSelector from "./SizeSelector";
import { useCart } from "@/context/CartContext";

type ProductActionsProps = {
  sizes: string[];
  productName: string;
  productId: number;

};

export default function ProductActions({
  sizes,
  productName,
  productId,
}: ProductActionsProps) {

  const [selectedSize, setSelectedSize] = useState("");

  const { addToCart } = useCart();

  const handleAddToCart = () => {

    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart({
      id: productId,
      name: productName,
      size: selectedSize,
    });

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