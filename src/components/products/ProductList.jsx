import ProductCard from "../common/ProductCard";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <div className="no-products">No products match your filters.</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
