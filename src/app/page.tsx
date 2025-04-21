import Image from "next/image";
import Link from "next/link";
import "@fontsource/dancing-script";

export default function Home() {
  return (
    <section className=" relative min-h-screen flex flex-col">
      <Image
        src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        height={1000}
        width={1000}
        className="w-full h-screen object-cover"
      />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex  flex-row flex-wrap  gap-6 items-center justify-center w-[80%] ">
        <Link
          href="/products/men"
          className="bg-white text-center  font-semibold p-3 text-black  text-xs md:text-sm lg:text-md  hover:bg-zinc-200 hover:scale-101 transition-all whitespace-nowrap shadow-lg rounded"
        >
          Shop Men
        </Link>
        <Link
          href="/products/women"
          className="bg-white text-center font-semibold p-3 text-black  text-xs md:text-sm  lg:text-md  hover:bg-zinc-200 hover:scale-101 transition-all whitespace-nowrap shadow-lg rounded"
        >
          Shop Women
        </Link>
        <Link
          href="/products/accessories"
          className="bg-white text-center font-semibold p-3 text-black text-xs md:text-sm  lg:text-md  hover:bg-zinc-200 hover:scale-101 transition-all whitespace-nowrap shadow-lg rounded"
        >
          Shop Accessories
        </Link>
      </div>
      <h1
        className="absolute top-10 text-white whitespace-nowrap font-bold text-3xl sm:text-4xl xl:text-5xl left-1/2 transform -translate-x-1/2 "
        style={{ fontFamily: "Dancing Script" }}
      >
        Shop Smart, Live Better.
      </h1>
    </section>
  );
}
