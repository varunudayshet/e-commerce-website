import { mockProducts } from "./mockData";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const USE_MOCK = import.meta.env.VITE_MOCK_API === "true";

export const fetchProducts = async () => {
  if (USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockProducts), 500);
    });
  }

  try {
    const response = await fetch(`${API_BASE_URL}/products`); // Fixed: Use API_BASE_URL
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  if (USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = mockProducts.find((p) => p.id === id);
        resolve(product);
      }, 500);
    });
  }

  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`); // Fixed: Use API_BASE_URL
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
