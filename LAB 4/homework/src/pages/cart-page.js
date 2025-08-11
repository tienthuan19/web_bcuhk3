import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cart-context";

function CartPage() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "2rem",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "3rem",
            backgroundColor: "#fff",

            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
            maxWidth: "600px",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
          }}
        >
          <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}></div>
          <h2
            style={{ fontSize: "2rem", color: "#333", marginBottom: "0.5rem" }}
          >
            Your cart is empty
          </h2>
          <p style={{ fontSize: "1rem", color: "#777", marginBottom: "2rem" }}>
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            to="/"
            style={{
              display: "inline-block",
              backgroundColor: "#1f2937",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              textDecoration: "none",
              fontSize: "1rem",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#4b5563")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#1f2937")}
          >
            ✨ Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "4rem 2rem",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        color: "#333",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "0.5rem",
              color: "#1f2937",
            }}
          >
            🛒 Your Shopping Cart
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#6b7280" }}>
            {getTotalItems()} item{getTotalItems() !== 1 ? "s" : ""} in your
            cart
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
          }}
        >
          {/* Cart Items */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  padding: "1.5rem",
                  backgroundColor: "#fff",

                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      overflow: "hidden",

                      flexShrink: "0",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div style={{ flexGrow: "1" }}>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        marginBottom: "0.5rem",
                        color: "#1f2937",
                      }}
                    >
                      {item.name}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                      {item.description}
                    </p>
                    <div style={{ marginTop: "0.75rem" }}>
                      <span
                        style={{
                          backgroundColor: "#e5e7eb",
                          color: "#4b5563",
                          padding: "0.25rem 0.75rem",

                          fontSize: "0.75rem",
                          fontWeight: "600",
                          textTransform: "capitalize",
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2rem",
                      flexShrink: "0",
                      width: "300px",
                      justifyContent: "flex-end",
                    }}
                  >
                    <div style={{ textAlign: "right" }}>
                      <p
                        style={{
                          color: "#6b7280",
                          fontSize: "0.9rem",
                          marginBottom: "0.25rem",
                        }}
                      >
                        ${item.price.toFixed(2)} each
                      </p>
                      <p
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "700",
                          color: "#1f2937",
                        }}
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        fontSize: "1.5rem",
                        color: "#ef4444",
                        cursor: "pointer",
                        padding: "0.5rem",
                      }}
                      title="Remove from cart"
                    >
                      🗑️
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid #e5e7eb",
                    paddingTop: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      disabled={item.quantity <= 1}
                      style={{
                        backgroundColor: "#f3f4f6",

                        width: "32px",
                        height: "32px",
                        fontSize: "1rem",
                        cursor: "pointer",
                        color: "#4b5563",
                      }}
                    >
                      −
                    </button>
                    <span
                      style={{
                        fontSize: "1rem",
                        fontWeight: "500",
                        color: "#1f2937",
                        padding: "0 0.5rem",
                      }}
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        backgroundColor: "#f3f4f6",
                        border: "1px solid #e5e7eb",

                        width: "32px",
                        height: "32px",
                        fontSize: "1rem",
                        cursor: "pointer",
                        color: "#4b5563",
                      }}
                    >
                      +
                    </button>
                  </div>
                  <p
                    style={{ color: "#6b7280", fontSize: "0.9rem", margin: 0 }}
                  >
                    In stock
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div
            style={{
              position: "sticky",
              top: "20px",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",

                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                padding: "2rem",
              }}
            >
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "1.5rem",
                  color: "#1f2937",
                }}
              >
                📋 Order Summary
              </h2>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                  fontSize: "1rem",
                  color: "#4b5563",
                }}
              >
                <span>Subtotal ({getTotalItems()} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                  fontSize: "1rem",
                  color: "#4b5563",
                }}
              >
                <span>Estimated Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div
                style={{
                  borderTop: "1px solid #e5e7eb",
                  paddingTop: "1rem",
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#1f2937",
                  }}
                >
                  Total
                </span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#1f2937",
                  }}
                >
                  ${total.toFixed(2)}
                </span>
              </div>

              <Link
                to="/checkout"
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "#1f2937",
                  color: "#fff",
                  padding: "1rem",

                  textDecoration: "none",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginTop: "1.5rem",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#4b5563")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#1f2937")}
              >
                Checkout
              </Link>

              <Link
                to="/"
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "transparent",
                  color: "#4b5563",
                  padding: "0.75rem",

                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: "500",
                  marginTop: "1rem",
                  border: "1px solid #d1d5db",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#f3f4f6")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
