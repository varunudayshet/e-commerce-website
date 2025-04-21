const CartSummary = ({ total }) => {
  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>
      <div className="summary-row">
        <span>Subtotal</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="summary-row total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartSummary;
