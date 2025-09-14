import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/Skeleton";
import { products } from "../data";
import "../styles/theme.css";
import "../styles/global.css";

const Home = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} cartCount={cartCount} />

      <div className="container">
        <h1 className="main-title">Produtos</h1>
        <div className="products-grid">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} />
              ))
            : products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
