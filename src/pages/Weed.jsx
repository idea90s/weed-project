import React, { useContext } from "react";
import { CartContext } from "../context/CartCT";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import { PiTreePalmBold } from "react-icons/pi";
import { FaStreetView } from "react-icons/fa";
import { MdShutterSpeed } from "react-icons/md";
import productItems from "../demo/products.json";
import { BsCart4 } from "react-icons/bs";
import { MdBackspace } from "react-icons/md";

const Weed = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [value, setValue] = useState(0);

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart } = useContext(CartContext); // เรียกใช้ Context

  const result = product.price_per_g * value;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = productItems.find(
          (product) => product.id === parseInt(id)
        );

        console.log(data);
        const result = data;
        setProduct(result);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching members:", error);
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleDecrease = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < 20) {
      setValue(value + 1);
    }
  };
  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 20) {
      setValue(newValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart(
      product.id,
      product.name,
      product.price_per_g,
      value,
      product.img_path
    ); // เพิ่มสินค้าลงในตะกร้าด้วย Context API
    navigate("/order", {
      state: { product: product, qty: value },
    });
    window.scrollTo(0, 0);
  };
  return (
    <MainLayout>
      {isLoading ? (
        <p className="text-green-500">⏳ กำลังโหลดข้อมูล ...</p>
      ) : (
        <div className="">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-end">
              <div className="flex justify-end items-center">
                <div className="mb-4 px-3 py-1 rounded text-3xl border-2 border-b-8 border-green-800 text-yellow-500 hover:border-green-600 hover:text-white">
                  <MdBackspace />
                </div>
              </div>
            </Link>
            <Link to="/order" className="text-end">
              <div className="flex justify-end items-center">
                <div className="mb-4 px-3 py-1 rounded text-3xl border-2 border-b-8 border-green-800 text-yellow-500 hover:border-green-600 hover:text-white">
                  <BsCart4 />
                </div>
              </div>
            </Link>
          </div>
          <img
            src="/weed1.jpeg"
            alt="weed-items"
            className="w-full h-72 object-cover rounded border-2 border-b-8 border-green-500"
          />
          <div className="flex items-end justify-end py-4 px-4 my-4 gap-2 border-2 rounded border-b-8 border-yellow-500 bg-gradient-to-l from-black via-black to-yellow-500/10">
            <span>ราคาต่อ G /</span>
            <p className="text-5xl font-bold text-yellow-500">
              {product.price_per_g}
            </p>
            <span>บาท</span>
          </div>
          <div className="my-6 px-6 py-4 border-2 border-b-8 rounded bg-gradient-to-l from-black via-black to-green-300/10">
            <ul className="list-none text-lg font-medium space-y-1">
              <li className="flex items-center gap-2">
                <PiTreePalmBold className="text-2xl" />
                <span className="text-yellow-500 font-light text-base whitespace-nowrap">
                  ชื่อสายพันธ์ :
                </span>{" "}
                {product.name}
              </li>
              <li className="flex items-center gap-2">
                <MdShutterSpeed className="text-2xl" />
                <span className="text-yellow-500 font-light text-base whitespace-nowrap">
                  ระดับ THC :
                </span>{" "}
                {product.thc}
              </li>

              <li className="flex items-center gap-2">
                <FaStreetView className="text-2xl" />
                <span className="text-yellow-500 font-light text-base whitespace-nowrap">
                  ผลการใช้ :
                </span>{" "}
                {product.effects && (
                  <div className="flex gap-2">
                    {product.effects.map((effect, index) => (
                      <p key={index}>{effect}</p>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="py-2 flex justify-center items-end gap-2 text-xl pb-4">
            <span>รวมทั้งหมด</span>
            <p className="text-5xl font-bold text-green-500">
              {result.toLocaleString()}
            </p>
            <span>บาท</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex w-full items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleDecrease}
                className="border-2 border-b-8 rounded border-white text-yellow-500 w-16 text-3xl"
              >
                -
              </button>
              <input
                type="number"
                name="qty"
                value={value}
                onChange={handleChange}
                min="0"
                max="20"
                className="text-center w-60 text-yellow-500 text-5xl rounded border-2 border-b-8 border-white bg-black bg-gradient-to-b from-black via-black to-green-500/10"
              />
              <button
                type="button"
                onClick={handleIncrease}
                className="border-2 border-b-8 rounded border-white text-yellow-500 w-16 text-3xl"
              >
                +
              </button>
            </div>

            <div className="flex justify-center items-center my-12 border-2 border-b-8 border-green-500 text-green-100 rounded py-3">
              <input type="hidden" value={product.id} name="id" />
              <button type="submit" className="text-3xl">
                หยิบใส่ตะกร้า
              </button>
            </div>
          </form>
        </div>
      )}
    </MainLayout>
  );
};

export default Weed;
