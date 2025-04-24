"use client";

import { useCartStore } from "@/stores/cart-store";
import Image from "next/image";
import { useEffect } from "react";
import homeImg from "../../../public/img/baskit-home-img.jpg";
import { CircleCheckBig } from "lucide-react";

const SuccessfulPayment = () => {
  const { clearCart } = useCartStore();
  useEffect(() => {
    clearCart();
  }, []);
  return (
    <section id="success" className="grid grid-cols-1 sm:grid-cols-2 relative ">
      <Image
        src={
          "https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Home Page Image"
        height={1000}
        width={1000}
        className=" h-screen object-cover sm:object-full object-top "
      />
      <div className="absolute top-0 sm:static p-4  pb-50 flex flex-col justify-center items-center gap-4.5 bg-[rgba(0,0,0,.1)] sm:bg-stone-100 h-full">
        <CircleCheckBig size={150} className="text-white sm:text-green-500 " />
        <p className="text-center text-white sm:text-black font-semibold text-md sm:text-lg">
          BASKIT has your order! We’ve sent the confirmation to your inbox.
          You’ll hear from us again when it’s on the way.
        </p>
      </div>
    </section>
  );
};
export default SuccessfulPayment;
