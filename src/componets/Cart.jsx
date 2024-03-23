// import React from "react";
import { BsCart4 } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import React, { useContext } from "react";
import { CartContext } from "../context/CartCT";

const Cart = () => {
  const { productsTotal, priceTotal } = useContext(CartContext);
  const pt = productsTotal();
  const tt = priceTotal();

  return (
    <div className=" sticky bottom-0 border-b-8 border-t-2 border-green-500 bg-black bg-gradient-to-b from-black to-green-500/20 px-4 py-3 flex justify-between">
      <div className="flex items-center gap-2">
        <BsCart4 className="text-4xl text-yellow-500" />
        <p>
          
          <span className="text-green-500 text-4xl font-bold">
            {` `}
            {pt}
            {` `}
          </span>
          G/จี
        </p>
      </div>
      <div className="flex items-center gap-2">
        <GiTakeMyMoney className="text-4xl text-yellow-500" />
        <p>
          
          <span className="text-green-500 text-4xl font-bold">
            {` `}
            {tt.toLocaleString()}
            {` `}
          </span>
          บาท
        </p>
      </div>
    </div>
  );
};

export default Cart;
