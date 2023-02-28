import "./preview.css";

function Preview() {
  return (
    <div className="card">
      <img
        src="/src/assets/images/image-product-desktop.jpg"
        alt="product-image"
      />

      <div className="info">
        <h3>PERFUME</h3>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Oliver
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="price">
          <h2>$149.99</h2>
          <p>$169.99</p>
        </div>
        <button>
          <img src="/src/assets/images/icon-cart.svg" alt="cart-image" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Preview;
