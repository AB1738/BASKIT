import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/customComponents/Header";
import Footer from "@/components/customComponents/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Baskit - Your One-Stop Shop for Quality Goods",
  description:
    "Discover premium products at Baskit. Shop from a wide range of categories with easy navigation and secure checkout.",
  keywords: [
    "ecommerce",
    "shopping",
    "online store",
    "premium products",
    "fashion",
    "lifestyle",
    "accessories",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased min-h-screen `}>
        <Header />
        <main className="mx-auto min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
