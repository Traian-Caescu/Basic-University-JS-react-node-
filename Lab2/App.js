import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [main, setMain] = useState('1.50');
  const [quantity, setQuantity] = useState(1);
  const [side, setSide] = useState('1.25');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [total, setTotal] = useState('0.00');

  useEffect(() => {
    setTotal((parseFloat(main) * quantity + parseFloat(side)).toFixed(2));
  }, [main, quantity, side]);

  const handleMainChange = (event) => {
    setMain(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSideChange = (event) => {
    setSide(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (quantity > 0) {
      setOrderPlaced(true);
    } else {
      alert("Please select a valid quantity.");
    }
  };

  return (
    <div className="App">
      {!orderPlaced ? (
        <div className="container">
          <div className="header">
            <h1>Welcome to Chicken to Go</h1>
            <h2>Please place your order</h2>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <label>Main</label>
              <select value={main} onChange={handleMainChange}>
                <option value="1.50">Chicken Pieces £1.50</option>
                <option value="2.50">Chicken Bucket £2.50</option>
                <option value="5.00">Family Pack £5.00</option>
              </select>

              <label>Quantity</label>
              <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />

              <label>Sides</label>
              <select value={side} onChange={handleSideChange}>
                <option value="1.25">Pepsi £1.25</option>
                <option value="1.80">Corn £1.80</option>
                <option value="1.50">Gravy £1.50</option>
              </select>
            </div>

            <div className="order-summary">
              <p>Order: {quantity} x Main, 1 x Side. Total: £{total}</p>
            </div>

            <button type="submit" className="place-order">Place Order</button>
          </form>
        </div>
      ) : (
        <div className="thank-you">
          <p>Thank you!</p>
          <p>Your order is placed.</p>
        </div>
      )}
    </div>
  );
}

export default App;
