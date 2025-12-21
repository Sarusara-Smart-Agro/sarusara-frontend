import React from "react";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  description: string;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  description,
  onAddToCart,
}) => {
  return (
    <div
      className="
        w-[20%] h-auto rounded-2xl p-5 m-[20px]
        bg-white
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)]
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* Product Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="
            w-full h-48 object-cover rounded-xl
            transition-transform duration-300
            hover:scale-105
          "
        />
      </div>

      {/* Product Name */}
      <h3 className="text-lg font-semibold text-green-900 mt-4">{name}</h3>

      {/* Product Description */}
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>

      {/* Product Price */}
      <p className="text-xl font-bold text-green-800 mt-3">Rs. {price}</p>

      {/* Add to Cart */}
      <button
        onClick={onAddToCart}
        className="
          w-full mt-4 py-2 rounded-xl font-semibold
          bg-green-900 text-white
          shadow-md
          hover:bg-green-800 hover:shadow-lg
          transition-all duration-300
          cursor-pointer
        "
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
