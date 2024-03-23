import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <p className="text-center text-2xl">
          เราได้รับออเดอร์ของท่านเรียบร้อยแล้วครับ กรุณารอการจัดส่ง 🙏🏻
        </p>
        <Link
          to="https://www.instagram.com/idea90s/"
          target="_blank"
          className="border-2 border-b-8 my-6 px-6 py-2 rounded border-white text-green-500 text-2xl"
        >
          ติดต่อพนักงาน
        </Link>
      </div>
    </MainLayout>
  );
};

export default Success;
