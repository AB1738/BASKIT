"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";
import { Plus, Minus, CircleCheck, OctagonX } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import "@fontsource/dancing-script";

import Image from "next/image";

const cartPage = () => {
  const { cart, clearCart, removeFromCart, addToCart } = useCartStore();
  console.log(cart);
  return (
    <div className="flex-1 flex flex-col">
      <h1
        className="text-4xl sm:text-5xl font-bold  py-2"
        style={{ fontFamily: "Dancing Script" }}
      >
        My Cart
      </h1>
      {cart.length < 1 ? (
        <h2>There are no items in your cart</h2>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center border-b-2 border-stone-200 flex-1 relative"
          >
            <Image
              src={item.image}
              alt={item.description}
              height={1000}
              width={1000}
              className="h-70 w-70 rounded"
            />
            <div className="flex flex-col gap-4 items-center flex-1">
              <h2 className="text-2xl font-bold">{item.name}</h2>
              <p>
                <span className="font-semibold">Qty: </span>
                {item.qty}
              </p>
              <p className="font-semibold">${item.price * item.qty}</p>
              <div className="flex gap-3">
                <Button className="cursor-pointer">
                  <Minus />
                </Button>
                <Button className="cursor-pointer">
                  <Plus />
                </Button>
              </div>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="absolute top-5 right-5">
                  <OctagonX className="cursor-pointer " />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete from cart</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <>
          <h3 className="text-3xl font-semibold text-right py-3">
            Total Price: $10.99
          </h3>

          <Button className="w-full p-3 mt-3 cursor-pointer mx-auto ">
            Checkout <CircleCheck />
          </Button>
        </>
      )}
    </div>
  );
};
export default cartPage;
