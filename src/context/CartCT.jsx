// CartContext.js

import React, { createContext, useState } from "react";

// สร้าง Context
export const CartContext = createContext();

// สร้าง Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // เพิ่มสินค้าเข้าในตะกร้า
  const addToCart = (productId, productName, pricePerG, quantity, imgPath) => {
    const itemIndex = cart.findIndex((item) => item.productId === productId);
    if (itemIndex !== -1) {
      // ถ้าสินค้ามีอยู่ในตะกร้าแล้ว ให้เพิ่มจำนวน
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // ถ้ายังไม่มีในตะกร้า ให้เพิ่มสินค้าใหม่
      setCart((prevCart) => [
        ...prevCart,
        { productId, productName, pricePerG, quantity, imgPath },
      ]);
    }
  };

  // ลดจำนวนสินค้าในตะกร้า
  const deQ = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.productId === productId && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  //เพิ่ม quantity สินค้าแต่ละ id
  const inQ = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.productId === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // นับจำนวนสินค้าทั้งหมด
  const productsTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };
  // คำนวนยอดรวมทั้งหมดตะกร้า
  const priceTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.pricePerG * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, productsTotal, priceTotal, deQ,inQ }}
    >
      {children}
    </CartContext.Provider>
  );
};
