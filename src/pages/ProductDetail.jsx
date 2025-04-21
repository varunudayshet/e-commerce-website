import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";
import LoadingSpinner from "../components/common/LoadingSpinner";

const ProductDetail = () => {
  const { id } = useParams();
  const { getProductById } = useProducts();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = getProductById(id);
        if (!productData) {
          throw new Error("Product not found");
        }
        setProduct(productData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id, getProductById]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <div className="product-images">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <div className="price">${product.price.toFixed(2)}</div>
        <div className="rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>
              {i < Math.round(product.rating.rate) ? "★" : "☆"}
            </span>
          ))}
          <span>({product.rating.count} reviews)</span>
        </div>
        <p className="description">{product.description}</p>
        <div className="category">Category: {product.category}</div>

        <div className="add-to-cart">
          <div className="quantity-selector">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
