import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductContext";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <div className="app">
            <Header />
            <main>
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
