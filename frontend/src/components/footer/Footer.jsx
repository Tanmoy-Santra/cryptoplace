
import './footer.css';

  const Footer = () => {
    return (
      <footer className="footer">
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="footer-logo">CryptoPlace</span>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  

