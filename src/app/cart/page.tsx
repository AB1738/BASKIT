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
import { toast } from "sonner";

const CartPage = () => {
  const { cart, clearCart, removeFromCart, incrementQty, decrementQty } =
    useCartStore();

  const totalPrice = cart.reduce((acc, item) => {
    acc += item.qty * item.price;
    return acc;
  }, 0);

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });
      const { redirectUrl } = await response.json();
      window.location.assign(redirectUrl);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = (id: number, name: string) => {
    removeFromCart(id);
    toast.success(`${name} removed from cart`);
  };

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
            className="flex flex-col py-3 sm:py-0 sm:flex-row items-center border-b-2 border-stone-200 flex-1 relative"
          >
            <Image
              src={item.image}
              alt={item.description}
              height={1000}
              width={1000}
              className="h-70 w-70 rounded"
            />
            <div className="flex flex-col gap-4 items-center flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-center">
                {item.name}
              </h2>

              {item.sizes && (
                <p>
                  <span className="font-semibold">Size: </span>
                  {item.sizes}
                </p>
              )}
              <p>
                <span className="font-semibold">Qty: </span>
                {item.qty}
              </p>
              <p className="font-semibold">
                ${(item.price * item.qty).toFixed(2)}
              </p>
              <div className="flex gap-3">
                <Button
                  className="cursor-pointer"
                  onClick={() => decrementQty(item.id)}
                >
                  <Minus />
                </Button>
                <Button
                  className="cursor-pointer"
                  onClick={() => incrementQty(item.id)}
                >
                  <Plus />
                </Button>
              </div>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="absolute top-5 right-5">
                  <OctagonX
                    className="cursor-pointer "
                    onClick={() => handleDelete(item.id, item.name)}
                  />
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
          <div className="flex justify-between items-center">
            <p
              className="text-xs hover:underline text-gray-700 cursor-pointer"
              onClick={clearCart}
            >
              Clear Cart
            </p>
            <h3 className="text-xl sm:text-3xl font-semibold text-right py-3">
              Total Price: ${totalPrice.toFixed(2)}
            </h3>
          </div>

          <Button
            className="w-full p-3 mt-3 cursor-pointer mx-auto "
            onClick={handleCheckout}
          >
            Checkout <CircleCheck />
          </Button>
        </>
      )}
    </div>
  );
};
export default CartPage;
