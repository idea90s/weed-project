import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useState, useEffect } from "react";
import productItems from "../demo/products.json";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import Ft from "../componets/Ft";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      //   const response = await fetch(productItems);
      //   if (!response.ok) {
      //     throw new Error("Failed to fetch members");
      //   }
      //   const data = await response.json();
      const data = productItems;

      console.log(data);
      const result = data;
      setProducts(result);
      setTimeout(() => {
        setIsLoading(false); // ตั้งค่า isLoading เป็น false หลังจากผ่านไป 5 วินาที
      }, 1500);
    } catch (error) {
      console.error("Error fetching members:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <MainLayout>
      <Ft />
      {isLoading ? (
        <p className="text-green-600 text-xl">⏳ โหลดเมนูกัญชาสักครู่ ...</p>
      ) : (
        <div>
          <Link to="/order" className="text-end">
            <div className="flex justify-end items-center">
              <div className="mb-4 px-3 py-1 rounded text-3xl border-2 border-b-8 border-green-800 text-yellow-500 hover:border-green-600 hover:text-white">
                <BsCart4 />
              </div>
            </div>
          </Link>
          <div className="grid grid-cols-2 gap-4">
            {products.map((p, i) => (
              <div
                key={i}
                className="border-2 border-green-900 shadow border-b-8 rounded shadow-green-500/10  bg-black bg-gradient-to-b from-black via-black to-green-500/10"
              >
                <img
                  src="./weed1.jpeg"
                  alt="items"
                  className=" object-cover w-full h-40"
                />
                <ul className="p-1.5 font-bold text-center">
                  <li className="text-green-500">{p.name}</li>
                  <li className="text-green-500 text-sm">
                    THC{" "}
                    <span className="text-base font-medium text-white">
                      {p.thc}%
                    </span>
                  </li>
                  <li className="text-white font-medium text-xs">
                    <span className="text-yellow-500 font-bold text-2xl">
                      {p.price_per_g}
                    </span>{" "}
                    บาท / G
                  </li>
                  <li className="px-6">
                    <Link
                      to={`/weed/${p.id}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="flex items-center gap-2 justify-center border-b-4 text-yellow-500 border-2 border-green-600/20 bg-gradient-to-tr from-green-600 via-green-800 to-black/10 font-medium duration-500 hover:bg-gradient-to-bl hover:from-black hover:via-black hover:to-green-600/30 hover:text-green-500 hover:border-green-500 rounded w-full py-1 mt-2 my-1">
                        <RiShoppingBasketLine className="text-3xl" />
                        <p className="font-light text-white">เลือก</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Home;
