import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/common/ProductCard";
import LoadingSpinner from "../components/common/LoadingSpinner";

const Home = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Our Store</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/products" className="btn btn-primary">
          Shop Now
        </Link>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/products" className="btn btn-secondary">
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
