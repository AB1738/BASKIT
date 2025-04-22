"use client";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import "@fontsource/dancing-script";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/stores/cart-store";

const Header = () => {
  const pathname = usePathname();
  const { cart } = useCartStore();
  return (
    <nav className="flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between px-6 py-5 items-center bg-[#c6d0d1] sticky top-0 z-10">
      <ul className="flex flex-1 gap-6 ">
        <Link href="/products/men">
          <li
            className={`${
              pathname.split("/").includes("men")
                ? "text-black"
                : "text-[#5c5959]"
            } hover:text-black hover:underline`}
          >
            Men
          </li>
        </Link>
        <Link href="/products/women">
          <li
            className={`${
              pathname.split("/").includes("women")
                ? "text-black"
                : "text-[#5c5959]"
            } hover:text-black hover:underline`}
          >
            Women
          </li>
        </Link>
        <Link href="/products/accessories">
          <li
            className={`${
              pathname.split("/").includes("accessories")
                ? "text-black"
                : "text-[#5c5959]"
            } hover:text-black hover:underline`}
          >
            Accessories
          </li>
        </Link>
      </ul>
      <Link href="/">
        <div
          className="text-4xl font-bold uppercase text-white "
          style={{ fontFamily: "Dancing Script" }}
        >
          Baskit
        </div>
      </Link>
      <div className="flex flex-1  justify-end ">
        <Link href="/cart" className="flex flex-col ">
          {cart.length > 0 && (
            <span className="bg-red-500  top-0 rounded-full px-0 py-0.75 text-center  text-white text-[.5rem] font-bold">
              {cart.length}
            </span>
          )}
          <ShoppingBasket />
        </Link>
      </div>
    </nav>
  );
};
export default Header;
