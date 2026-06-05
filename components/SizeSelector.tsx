"use client";

// import { useState } from "react";

type SizeSelectorProps = {
  sizes: string[];
  selectedSize: string;
  setSelectedSize: (size: string) => void;
};

export default function SizeSelector({
  sizes,
  selectedSize,
  setSelectedSize,
}: SizeSelectorProps) {

//   const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="flex gap-3 mt-4">

      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`
            border
            px-4
            py-2
            rounded-lg
            cursor-pointer
            transition

            ${
              selectedSize === size
                ? "bg-white text-black"
                : "bg-transparent text-white"
            }
          `}
        >
          {size}
        </button>
      ))}

    </div>
  );
}