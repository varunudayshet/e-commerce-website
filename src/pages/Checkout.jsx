import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useForm } from "../hooks/useForm";
import LoadingSpinner from "../components/common/LoadingSpinner";

const validate = (values) => {
  const errors = {};
  if (!values.name) errors.name = "Name is required";
  if (!values.email) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.address) errors.address = "Address is required";
  if (!values.city) errors.city = "City is required";
  if (!values.zipCode) errors.zipCode = "Zip code is required";
  if (!values.cardNumber) errors.cardNumber = "Card number is required";
  if (!values.cardExpiry) errors.cardExpiry = "Expiry date is required";
  if (!values.cardCvc) errors.cardCvc = "CVC is required";
  return errors;
};

const Checkout = () => {
  const { cart, cartTotal, cartCount, clearCart } = useCart();
  const { values, errors, touched, handleChange, handleBlur } = useForm(
    {
      name: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
      saveInfo: false,
    },
    validate
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Clear cart and show success message
    clearCart();
    setOrderSuccess(true);
    setIsSubmitting(false);
  };

  if (cartCount === 0 && !orderSuccess) {
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

  if (orderSuccess) {
    return (
      <div className="order-success">
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for your purchase. Your order has been received.</p>
        <p>A confirmation email has been sent to {values.email}.</p>
        <Link to="/products" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-container">
        <div className="checkout-form">
          <h2>Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.name && errors.name ? "error" : ""}
              />
              {touched.name && errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.email && errors.email ? "error" : ""}
              />
              {touched.email && errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.address && errors.address ? "error" : ""}
              />
              {touched.address && errors.address && (
                <span className="error-message">{errors.address}</span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.city && errors.city ? "error" : ""}
                />
                {touched.city && errors.city && (
                  <span className="error-message">{errors.city}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={values.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.zipCode && errors.zipCode ? "error" : ""}
                />
                {touched.zipCode && errors.zipCode && (
                  <span className="error-message">{errors.zipCode}</span>
                )}
              </div>
            </div>

            <h2>Payment Information</h2>

            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={values.cardNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="1234 5678 9012 3456"
                className={
                  touched.cardNumber && errors.cardNumber ? "error" : ""
                }
              />
              {touched.cardNumber && errors.cardNumber && (
                <span className="error-message">{errors.cardNumber}</span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cardExpiry">Expiry Date</label>
                <input
                  type="text"
                  id="cardExpiry"
                  name="cardExpiry"
                  value={values.cardExpiry}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="MM/YY"
                  className={
                    touched.cardExpiry && errors.cardExpiry ? "error" : ""
                  }
                />
                {touched.cardExpiry && errors.cardExpiry && (
                  <span className="error-message">{errors.cardExpiry}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="cardCvc">CVC</label>
                <input
                  type="text"
                  id="cardCvc"
                  name="cardCvc"
                  value={values.cardCvc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="123"
                  className={touched.cardCvc && errors.cardCvc ? "error" : ""}
                />
                {touched.cardCvc && errors.cardCvc && (
                  <span className="error-message">{errors.cardCvc}</span>
                )}
              </div>
            </div>

            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                checked={values.saveInfo}
                onChange={handleChange}
              />
              <label htmlFor="saveInfo">
                Save this information for next time
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? <LoadingSpinner small /> : "Place Order"}
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-items">
            {cart.map((item) => (
              <div key={item.id} className="order-item">
                <div className="item-info">
                  <span className="item-name">{item.title}</span>
                  <span className="item-quantity">x{item.quantity}</span>
                </div>
                <div className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="order-total">
            <span>Total:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
