"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className={`flex justify-center py-7 px-4 text-xs text-center ${
        pathname.split("/").includes("products") ||
        pathname.split("/").includes("cart")
          ? "bg-stone-100"
          : "bg-[#b9c2c7]"
      }`}
    >
      BASKIT &copy; {new Date().getFullYear()} All rights reserved. Made with
      Next.js
    </footer>
  );
};
export default Footer;
