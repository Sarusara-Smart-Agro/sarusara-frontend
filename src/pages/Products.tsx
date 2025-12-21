import ProductCard from "../components/ProductCard";
import paddy from "../assets/paddy.jpg";

const Products = () => {
  return (
    <ProductCard
      image={paddy}
      name="Organic Tomatoes"
      price={450}
      description="Fresh organic tomatoes directly from local farmers."
      onAddToCart={() => alert("add to cart")}
    />
  );
}

export default Products