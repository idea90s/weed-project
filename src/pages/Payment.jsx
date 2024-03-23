import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { MdBackspace } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const Payment = () => {
  return (
    <MainLayout>
      <div className="flex justify-between items-center">
        <Link to="/order" className="text-end">
          <div className="flex justify-end items-center">
            <div className="mb-4 px-3 py-1 rounded text-3xl border-2 border-b-8 border-green-800 text-yellow-500 hover:border-green-600 hover:text-white">
              <MdBackspace />
              
            </div>
          </div>
        </Link>
        <Link to="https://www.instagram.com/idea90s/" target="_blank" className="text-end">
          <div className="flex justify-end items-center">
            <div className="mb-4 px-3 py-1 rounded text-3xl border-2 border-b-8 border-green-800 text-yellow-500 hover:border-green-600 hover:text-white">
            <BiSupport />
            </div>
          </div>
        </Link>
      </div>
      <div className="my-4 border-2 border-b-8 border-green-500 rounded flex justify-center bg-white">
        <img
          src="https://apps.odoo.com/web/image/loempia.module/87744/icon_image?unique=4c1137c"
          alt=""
        />
      </div>
      <form action="">
        <div className="my-4 border-2 border-b-8 border-blue-500 rounded">
          <div className="grid grid-cols-2 px-2 py-6 gap-4">
            <div className="col-span-2 flex gap-4 whitespace-nowrap text-2xl px-2">
              <label htmlFor="" className="w-44">
                ชื่อที่ใช้โอน
              </label>
              <input type="text" className="w-full rounded px-2" />
            </div>

            <div className="col-span-2 flex gap-4 whitespace-nowrap text-2xl px-2">
              <label htmlFor="" className="w-44">
                ธนาคาร
              </label>
              <select type="text" className="w-full rounded px-2">
                <option value="1">กสิกรไทย</option>
                <option value="1">ไทยพาณิชย์</option>
                <option value="1">กรุงเทพ</option>
                <option value="1">กรุงศรี</option>
                <option value="1">ทีเอ็มบี {`ทหารไทย`}</option>
                <option value="1">ออมสิน</option>
                <option value="1">เกียรตินาคิน</option>
                <option value="1">ยูโอบี</option>
              </select>
            </div>
            <div className="col-span-2 flex gap-4 whitespace-nowrap text-2xl px-2">
              <label htmlFor="" className="w-44">
                วันที่
              </label>
              <input type="date" className="w-full rounded px-2" />
            </div>
            <div className="col-span-2 flex gap-4 whitespace-nowrap text-2xl px-2">
              <label htmlFor="" className="w-44">
                เวลา
              </label>
              <input type="time" className="w-full rounded px-2" />
            </div>
            <div className="col-span-2 flex gap-4 whitespace-nowrap text-2xl px-2">
              <label htmlFor="" className="w-44">
                สลีปการโอน
              </label>
              <input type="file" className="w-full rounded px-2" />
            </div>
          </div>
        </div>

        <div className="my-4 border-2 border-b-8 border-yellow-500 rounded">
          <div className="grid grid-cols-2 px-2 py-6 gap-4">
            <div className="col-span-2 flex gap-4 whitespace-nowrap text-2xl px-2">
              <label htmlFor="" className="w-44">
                เบอร์โทรศัพทร์
              </label>
              <input type="text" className="w-full rounded px-2" />
            </div>
            <div className="col-span-2 flex gap-4 whitespace-nowrap text-2xl px-2">
              <label htmlFor="" className="w-44">
                จัดส่งที่
              </label>
              <input type="text" className="w-full rounded px-2" />
            </div>

            <div className="col-span-2 flex gap-4 whitespace-nowrap text-2xl px-2">
              <label htmlFor="" className="w-44">
                จังหวัด
              </label>
              <select type="text" className="w-full rounded px-2">
                <option value="1">อัพเดท</option>
              </select>
            </div>
            <div className="col-span-2 flex gap-4 whitespace-nowrap text-2xl px-2">
              <label htmlFor="" className="w-44">
                ไปรษณีย์
              </label>
              <input type="text" className="w-full rounded px-2" />
            </div>

            <div className="col-span-2 flex gap-4 whitespace-nowrap text-2xl px-2 mt-6">
              <Link
                to="/success"
                className="w-full"
                onClick={() => window.scrollTo(0, 0)}
              >
                <button className="border-2 rounded w-full py-2 border-b-8 border-black/50 bg-yellow-500">
                  ส่งข้อมูล
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </MainLayout>
  );
};

export default Payment;
