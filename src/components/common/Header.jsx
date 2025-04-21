import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Frinder</Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Cart{" "}
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
