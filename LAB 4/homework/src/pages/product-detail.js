import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../cart-context";
import { mockProducts } from "../fake-data";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

  const product = mockProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          padding: "4rem",
          backgroundColor: "#f7fafc",
          fontFamily: "'Inter', sans-serif",
          color: "#2d3748",
        }}
      >
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: "700",
            color: "#e53e3e",
            marginBottom: "1rem",
          }}
        >
          Product Not Found
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            color: "#4a5568",
            marginBottom: "2rem",
          }}
        >
          The product you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#4c51bf",
            color: "white",
            border: "none",
            padding: "1rem 2rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "600",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#434190")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4c51bf")}
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const isInCart = cartItems.some((item) => item.id === product.id);
  const cartItem = cartItems.find((item) => item.id === product.id);

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "4rem 2rem",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#f7fafc",
        color: "#2d3748",
      }}
    >
      {/* Breadcrumb */}
      <div
        style={{
          marginBottom: "2rem",
          fontSize: "0.875rem",
          color: "#718096",
        }}
      >
        <span
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", color: "#4c51bf", fontWeight: "600" }}
        >
          Home
        </span>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <span style={{ textTransform: "capitalize" }}>{product.category}</span>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <span>{product.name}</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "flex-start",
        }}
      >
        {/* Product Image */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "1rem",
            padding: "2.5rem",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)",
            textAlign: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              borderRadius: "0.75rem",
              objectFit: "cover",
              border: "1px solid #e2e8f0",
            }}
          />
        </div>

        {/* Product Info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          {/* Main Details */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "1rem",
              padding: "2.5rem",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)",
            }}
          >
            {/* Category Badge */}
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#e2e8f0",
                color: "#4a5568",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "1rem",
              }}
            >
              {product.category}
            </div>

            {/* Product Name */}
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "800",
                color: "#1a202c",
                marginBottom: "1rem",
                lineHeight: "1.2",
              }}
            >
              {product.name}
            </h1>

            {/* Price */}
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#e53e3e",
                marginBottom: "2rem",
              }}
            >
              ${product.price.toLocaleString()}
            </div>

            {/* Add to Cart Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                marginBottom: "2rem",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={handleAddToCart}
                style={{
                  backgroundColor: isInCart ? "#38a169" : "#4c51bf",
                  color: "white",
                  border: "none",
                  padding: "1rem 2.5rem",
                  borderRadius: "0.75rem",
                  fontSize: "1.125rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  flexGrow: "1",
                  maxWidth: "300px",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 4px 14px rgba(76, 81, 191, 0.25)";
                  if (isInCart) {
                    e.target.style.backgroundColor = "#2f855a";
                  } else {
                    e.target.style.backgroundColor = "#434190";
                  }
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                  e.target.style.backgroundColor = isInCart
                    ? "#38a169"
                    : "#4c51bf";
                }}
              >
                {isInCart ? `In Cart (${cartItem?.quantity})` : "Add to Cart"}
              </button>

              {isInCart && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#38a169",
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "#38a169" }}
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Added to cart</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => navigate("/cart")}
                style={{
                  backgroundColor: "#f6ad55",
                  color: "white",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#dd6b20")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#f6ad55")}
              >
                View Cart
              </button>
              <button
                onClick={() => navigate("/")}
                style={{
                  backgroundColor: "transparent",
                  color: "#4a5568",
                  border: "2px solid #cbd5e0",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#edf2f7";
                  e.target.style.borderColor = "#a0aec0";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.borderColor = "#cbd5e0";
                }}
              >
                Continue Shopping
              </button>
            </div>
          </div>

          {/* Product Description */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "1rem",
              padding: "2.5rem",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h3
              style={{
                color: "#1a202c",
                marginBottom: "1rem",
                fontSize: "1.5rem",
                fontWeight: "700",
              }}
            >
              Product Description
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.75",
                color: "#4a5568",
              }}
            >
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
