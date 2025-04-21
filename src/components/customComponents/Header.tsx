import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between px-6 py-5 items-center bg-stone-300">
      <ul className="flex flex-1 gap-6 ">
        <Link href="/products/men">
          <li>Men</li>
        </Link>
        <Link href="/products/women">
          <li>Women</li>
        </Link>
        <Link href="/products/accessories">
          <li>Accessories</li>
        </Link>
      </ul>
      <Link href="/">
        <div className="text-3xl font-bold uppercase ">Baskit</div>
      </Link>
      <div className="flex flex-1  justify-end">
        <ShoppingCart />
      </div>
    </nav>
  );
};
export default Header;
