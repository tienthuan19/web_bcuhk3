import React, { useState, useMemo } from "react";
import ProductCard from "../components/product-card";
import ProductFilter from "../components/product-filter";
import { mockProducts, priceRanges } from "../fake-data";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by price range
    if (selectedPriceRange !== "all") {
      const priceRange = priceRanges.find(
        (range) => range.id === selectedPriceRange
      );
      if (priceRange) {
        filtered = filtered.filter(
          (product) =>
            product.price >= priceRange.min && product.price <= priceRange.max
        );
      }
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
        fontFamily:
          "'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        {/* Filter Section */}
        <ProductFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedPriceRange={selectedPriceRange}
          onPriceRangeChange={setSelectedPriceRange}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Results Summary */}
        <div
          style={{
            marginBottom: "30px",
            padding: "20px",
            backgroundColor: "white",

            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "1.1rem",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            {filteredProducts.length > 0 ? (
              <>
                <span style={{ marginRight: "8px" }}></span>
                <strong>{filteredProducts.length}</strong> product
                {filteredProducts.length !== 1 ? "s" : ""}
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== "all" &&
                  ` in the ${selectedCategory} category`}
              </>
            ) : (
              <>
                <span style={{ marginRight: "8px" }}>🔍</span>
                No products found
              </>
            )}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "30px",
              paddingBottom: "60px",
            }}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "80px 20px",
              backgroundColor: "white",

              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
              margin: "50px 0",
            }}
          >
            <div style={{ fontSize: "4rem", marginBottom: "20px" }}>😢</div>
            <h3
              style={{
                color: "#4a5568",
                margin: "0 0 10px 0",
                fontSize: "1.8rem",
              }}
            >
              No product
            </h3>
            <p
              style={{
                color: "#718096",
                margin: "0 0 30px 0",
                fontSize: "1.1rem",
                maxWidth: "500px",
                margin: "0 auto 30px auto",
              }}
            >
              Not thing like that
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedPriceRange("all");
              }}
              style={{
                backgroundColor: "#f63b3bff",
                color: "white",
                border: "none",
                padding: "12px 28px",

                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#eb2525ff")
              }
              onMouseOut={(e) => (e.target.style.backgroundColor = "#f63b3bff")}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
