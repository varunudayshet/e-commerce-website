const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity)) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="item-details">
        <h3>{item.title}</h3>
        <div className="price">${item.price.toFixed(2)}</div>
        <div className="quantity-controls">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
          />
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
      </div>
      <div className="item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      <button className="remove-item" onClick={() => onRemove(item.id)}>
        ×
      </button>
    </div>
  );
};

export default CartItem;
