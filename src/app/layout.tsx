import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/customComponents/Header";
import Footer from "@/components/customComponents/Footer";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BASKIT - Premium Apparel for Every Style",
  description:
    "Welcome to BASKIT, your destination for high-quality clothing and stylish essentials. From trendy tees to cozy hoodies, we’ve got something for everyone.",
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
        <Toaster />

        <Footer />
      </body>
    </html>
  );
}
