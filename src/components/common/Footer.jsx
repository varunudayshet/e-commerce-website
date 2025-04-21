const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Frinder</h3>
            <p>Your one-stop shop for all your needs.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/cart">Cart</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: contactvarun@frinder.com</p>
            <p>Phone: 9629621762</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Frinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
