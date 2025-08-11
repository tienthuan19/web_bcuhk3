import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./cart-context";
import Header from "./components/header";
import HomePage from "./pages/home-page";
import CartPage from "./pages/cart-page";
import CheckoutPage from "./pages/checkout-page";
import ProductDetailPage from "./pages/product-detail";

function App() {
  return (
    <CartProvider>
      <Router>
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: "#9b9b9bff",
          }}
        >
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
