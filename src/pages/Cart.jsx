import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import LoadingSpinner from "../components/common/LoadingSpinner";

const Cart = () => {
  const {
    cart,
    cartTotal,
    cartCount,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (cartCount === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart is Empty</h1>
        <p>Looks like you haven't added any items to your cart yet.</p>
        <Link to="/products" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>
        Your Cart ({cartCount} {cartCount === 1 ? "item" : "items"})
      </h1>
      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          ))}
          <button className="btn btn-text" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        <CartSummary total={cartTotal} />
      </div>
      <div className="cart-actions">
        <Link to="/products" className="btn btn-secondary">
          Continue Shopping
        </Link>
        <Link to="/checkout" className="btn btn-primary">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
