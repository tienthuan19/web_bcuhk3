import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cart-context";

function CheckoutPage() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
      setIsProcessing(false);
    }, 2000);
  };

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
          backgroundColor: "#f8fafc",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "40px",
            backgroundColor: "#fff",

            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
            maxWidth: "600px",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🛒</div>
          <h2
            style={{
              fontSize: "1.8rem",
              color: "#334155",
              marginBottom: "10px",
            }}
          >
            Your cart is empty
          </h2>
          <p
            style={{ fontSize: "1rem", color: "#64748b", marginBottom: "30px" }}
          >
            Add some items to your cart before checking out.
          </p>
          <Link
            to="/"
            style={{
              display: "inline-block",
              backgroundColor: "#eb2525ff",
              color: "#fff",
              padding: "12px 24px",

              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "600",
              transition: "background-color 0.3s ease",
            }}
          >
            🛍️ Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
          backgroundColor: "#f8fafc",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "40px",
            backgroundColor: "#fff",

            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
            maxWidth: "600px",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "20px" }}>✅</div>
          <h1
            style={{ fontSize: "2rem", color: "#16a34a", marginBottom: "10px" }}
          >
            Successfully!
          </h1>
          <p
            style={{ fontSize: "1rem", color: "#64748b", marginBottom: "30px" }}
          >
            Thank you!!!!
          </p>
          <Link
            to="/"
            style={{
              display: "inline-block",
              backgroundColor: "#2563eb",
              color: "#fff",
              padding: "12px 24px",

              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "600",
              transition: "background-color 0.3s ease",
            }}
          >
            🏠 Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              color: "#1e293b",
              marginBottom: "10px",
            }}
          >
            💳 Secure Checkout
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#64748b" }}>
            Complete your purchase with confidence
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
          }}
        >
          {/* Checkout Form */}
          <div
            style={{
              backgroundColor: "#fff",

              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
              padding: "40px",
            }}
          >
            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <div style={{ marginBottom: "40px" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    color: "#1e293b",
                    marginBottom: "20px",

                    paddingBottom: "10px",
                  }}
                >
                  📦 Shipping Information
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "20px",
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#475569",
                          fontWeight: "600",
                        }}
                        htmlFor="firstName"
                      >
                        First Name *
                      </label>
                      <input
                        style={{
                          width: "100%",
                          padding: "12px",
                        }}
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#475569",
                          fontWeight: "600",
                        }}
                        htmlFor="lastName"
                      >
                        Last Name *
                      </label>
                      <input
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #e2e8f0",
                        }}
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "20px",
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#475569",
                          fontWeight: "600",
                        }}
                        htmlFor="email"
                      >
                        Email *
                      </label>
                      <input
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #e2e8f0",
                        }}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#475569",
                          fontWeight: "600",
                        }}
                        htmlFor="phone"
                      >
                        Phone *
                      </label>
                      <input
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #e2e8f0",
                        }}
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        color: "#475569",
                        fontWeight: "600",
                      }}
                      htmlFor="address"
                    >
                      Address *
                    </label>
                    <input
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #e2e8f0",
                      }}
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "20px",
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#475569",
                          fontWeight: "600",
                        }}
                        htmlFor="city"
                      >
                        City *
                      </label>
                      <input
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #e2e8f0",
                        }}
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#475569",
                          fontWeight: "600",
                        }}
                        htmlFor="state"
                      >
                        State *
                      </label>
                      <select
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #e2e8f0",
                        }}
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select State</option>
                        <option value="CA">California</option>
                        <option value="NY">New York</option>
                        <option value="TX">Texas</option>
                        <option value="FL">Florida</option>
                      </select>
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#475569",
                          fontWeight: "600",
                        }}
                        htmlFor="zipCode"
                      >
                        ZIP Code *
                      </label>
                      <input
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #e2e8f0",
                        }}
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    color: "#1e293b",
                    marginBottom: "20px",
                    borderBottom: "2px solid #e2e8f0",
                    paddingBottom: "10px",
                  }}
                >
                  Payment
                </h2>
                <div style={{ display: "grid", gap: "20px" }}>
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        color: "#475569",
                        fontWeight: "600",
                      }}
                      htmlFor="cardName"
                    >
                      Name on Card *
                    </label>
                    <input
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #e2e8f0",
                      }}
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        color: "#475569",
                        fontWeight: "600",
                      }}
                      htmlFor="cardNumber"
                    >
                      Card Number *
                    </label>
                    <input
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #e2e8f0",
                      }}
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "20px",
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#475569",
                          fontWeight: "600",
                        }}
                        htmlFor="expiryDate"
                      >
                        Expiry Date *
                      </label>
                      <input
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #e2e8f0",
                        }}
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#475569",
                          fontWeight: "600",
                        }}
                        htmlFor="cvv"
                      >
                        CVV *
                      </label>
                      <input
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #e2e8f0",
                        }}
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#f1f5f9",
                    padding: "20px",

                    width: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      color: "#1e293b",
                      marginBottom: "15px",
                    }}
                  >
                    Order Summary
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                      color: "#475569",
                    }}
                  >
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                      color: "#475569",
                    }}
                  >
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                      color: "#475569",
                    }}
                  >
                    <span>Shipping</span>
                    <span style={{ color: "#16a34a", fontWeight: "600" }}>
                      FREE
                    </span>
                  </div>
                  <div
                    style={{
                      borderTop: "1px dashed #cbd5e1",
                      marginTop: "15px",
                      paddingTop: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "700",
                        color: "#1e293b",
                      }}
                    >
                      Total
                    </span>
                    <span
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "700",
                        color: "#1e293b",
                      }}
                    >
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  style={{
                    width: "100%",
                    padding: "16px",
                    backgroundColor: isProcessing ? "#9ca3af" : "#2563eb",
                    color: "#fff",
                    border: "none",

                    fontSize: "1.1rem",
                    fontWeight: "600",
                    cursor: isProcessing ? "not-allowed" : "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  {isProcessing ? (
                    <>Load...</>
                  ) : (
                    <>Order - ${total.toFixed(2)}</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
