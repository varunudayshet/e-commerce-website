import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <div className="price">${product.price.toFixed(2)}</div>
        <div className="rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>
              {i < Math.round(product.rating.rate) ? "★" : "☆"}
            </span>
          ))}
        </div>
        <button className="btn btn-primary btn-sm" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
