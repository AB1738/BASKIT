"use client";

import { useCartStore } from "@/stores/cart-store";
import { Product } from "../../../schema";
import { Button } from "../ui/button";
interface PropType {
  product: Product;
}

const AddToCartBtn = ({ product }: PropType) => {
  const { addToCart, cart } = useCartStore();
  const handleClick = (product: Product) => {
    addToCart(product);
    console.log(cart);
  };
  return (
    <Button
      className="cursor-pointer hover:scale-101 transition-all duration-400"
      size={"lg"}
      onClick={() => handleClick(product)}
    >
      Add To Cart
    </Button>
  );
};
export default AddToCartBtn;
