import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import "@fontsource/dancing-script";

const Header = () => {
  return (
    <nav className="flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between px-6 py-5 items-center bg-[#c6d0d1] sticky top-0 z-10">
      <ul className="flex flex-1 gap-6 ">
        <Link href="/products/men">
          <li className="text-[#4e4c4c] hover:text-black hover:underline">
            Men
          </li>
        </Link>
        <Link href="/products/women">
          <li className="text-[#4e4c4c] hover:text-black hover:underline">
            Women
          </li>
        </Link>
        <Link href="/products/accessories">
          <li className="text-[#4e4c4c] hover:text-black hover:underline">
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
      <div className="flex flex-1  justify-end">
        <ShoppingBasket />
      </div>
    </nav>
  );
};
export default Header;
