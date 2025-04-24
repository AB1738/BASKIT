"use client";

import { useCartStore } from "@/stores/cart-store";
import Image from "next/image";
import { useEffect } from "react";
import successImg from "../../../public/img/Success_Page_Img.jpg";
import { CircleCheckBig } from "lucide-react";
import "@fontsource/dancing-script";

const SuccessfulPayment = () => {
  const { clearCart } = useCartStore();
  useEffect(() => {
    clearCart();
  }, []);
  return (
    <section id="success" className="grid grid-cols-1 sm:grid-cols-2 relative ">
      <Image
        src={successImg}
        alt="Home Page Image"
        height={1000}
        width={1000}
        className=" h-screen object-cover sm:object-full object-top "
      />
      <div className="absolute top-0 sm:static p-4  pb-50 flex flex-col justify-center items-center gap-4.5 bg-[rgba(0,0,0,.2)] sm:bg-stone-100 h-full">
        <h1
          className="absolute top-10 text-white sm:text-black whitespace-nowrap font-bold text-3xl sm:text-4xl xl:text-6xl animate-pulse "
          style={{ fontFamily: "Dancing Script" }}
        >
          Shop Smart, Live Better.
        </h1>
        <CircleCheckBig size={150} className="text-white sm:text-green-500 " />
        <p className="text-center text-white sm:text-black font-semibold text-sm sm:text-md leading-7.5">
          BASKIT has your order! We’ve sent the confirmation to your inbox.
          You’ll hear from us again when it’s on the way.
        </p>
      </div>
    </section>
  );
};
export default SuccessfulPayment;
