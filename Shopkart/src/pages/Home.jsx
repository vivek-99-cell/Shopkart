import react from 'react'
import Navbar from '../components/Navbar'
import './Home.css'
export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1> Good Choices. <br /> <span>Great Prices.</span> </h1>

          <p> Everything you need, <br /> delivered to your door. </p>

          <div className="hero-buttons">
            <button className="shop-btn">Shop Now →</button>
9
            <button className="deal-btn">Explore Deals</button>
          </div>
          {/* Hero Benefits */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <img src="/icons/secure.png" />  <p>100% Secure Payments</p> </div>
            <div className="benefit-item">
              <img src="/icons/clock.png" /> <p>7 Days Easy Returns</p> </div>
            <div className="benefit-item">
              <img src="/icons/express-delivery.png" /> <p>Fast & Free Delivery</p> </div>
          </div>
        </div>
      </section>
    </>
  );
}
