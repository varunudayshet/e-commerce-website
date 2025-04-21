import { createContext, useContext, useState, useEffect } from "react";
import { fetchProducts } from "../services/api";

const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        categories,
        getProductById,
        getProductsByCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
