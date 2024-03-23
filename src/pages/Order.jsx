import { useContext } from "react";
import { CartContext } from "../context/CartCT";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

import { GiMoneyStack } from "react-icons/gi";
import { FaStoreAlt } from "react-icons/fa";

const Order = () => {
  const { cart, deQ, inQ, priceTotal } = useContext(CartContext);
  const tt = priceTotal();

  return (
    <MainLayout>
      <div className="flex justify-between items-center">
        <Link to="/" className="text-end">
          <div className="flex justify-end items-center">
            <div className="mb-4 px-3 py-1 rounded text-3xl border-2 border-b-8 border-green-800 text-yellow-500 hover:border-green-600 hover:text-white">
              <FaStoreAlt />
            </div>
          </div>
        </Link>
        <Link to="/payment" className="text-end">
          <div className="flex justify-end items-center">
            <div className="mb-4 px-3 py-1 rounded text-3xl border-2 border-b-8 border-green-800 text-yellow-500 hover:border-green-600 hover:text-white">
              <GiMoneyStack />
            </div>
          </div>
        </Link>
      </div>
      <div className="my-6 space-y-6">
        {cart.map((c, i) => (
          <div key={i}>
            <div className="border-2 border-b-8 border-green-500 rounded p-4">
              <div className="bg-green-500 my-4 text-4xl text-black text-center py-1 rounded">
                {c.productName}
              </div>
              <div className="flex justify-start items-center space-x-2">
                <div className="border-2 border-green-500 rounded w-full h-36 overflow-hidden">
                  <img src="/weed1.jpeg" alt="" className="object-cover" />
                </div>
                <div className="w-full text-end text-4xl text-green-500">
                  <div className="flex justify-end items-center gap-3">
                    <button
                      onClick={() => deQ(c.productId)}
                      className="font-light text-xs px-2 py-0.5 border-2 border-b-8 rounded border-yellow-500 text-white"
                    >
                      ลบ
                    </button>
                    {c.quantity}
                    <button
                      onClick={() => inQ(c.productId)}
                      className="font-light text-xs px-2 py-0.5 border-2 border-b-8 rounded border-yellow-500 text-white"
                    >
                      เพิ่ม
                    </button>
                    <span className="text-base text-white">G/จี</span>
                  </div>
                  <div>
                    <span className="text-base text-white">รวม{` `}</span>
                    {(() => {
                      const tt = c.quantity * c.pricePerG;
                      return tt.toLocaleString();
                    })()}
                    <span className="text-base text-white">{` `}บาท</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="border-2 border-b-8 rounded bg-black p-4 text-white flex justify-center items-center gap-3">
          <p className="text-2xl">รวมทั้งหมด</p>
          <p className="text-6xl text-green-500 font-bold">
            {tt.toLocaleString()}
            <span className="text-base text-white">{` `}บาท</span>
          </p>
        </div>

        {/* ชำระเงิน */}
        <div className="text-center">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <button className="border-2 border-b-8 border-black/40 bg-green-500 hover:bg-green-500/70 rounded w-full py-2 text-2xl font-bold my-2">
              เลือกต่อ
            </button>
          </Link>
          <Link to="/payment" onClick={() => window.scrollTo(0, 0)}>
            <button className="border-2 border-b-8 border-black/40 bg-yellow-500 hover:bg-yellow-500/70 rounded w-full py-2 text-2xl font-bold my-2">
              ชำระเงิน
            </button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Order;
