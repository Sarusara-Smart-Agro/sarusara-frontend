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
    <div className="bg-white w-[500px] h-[300px] rounded-xl shadow-md hover:shadow-xl transition p-5 border border-green-100">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Product Name */}
      <h3 className="text-lg font-semibold text-green-900">{name}</h3>

      {/* Product Description */}
      <p className="text-sm text-green-800/80 mt-1 line-clamp-2">
        {description}
      </p>

      {/* Product Price */}
      <p className="text-xl font-bold text-green-700 mt-3">Rs. {price}</p>

      {/* Add to Cart */}
      <button
        onClick={onAddToCart}
        className="w-full mt-4 bg-green-900 text-white py-2 rounded-lg 
                   hover:bg-green-800 transition font-semibold cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
