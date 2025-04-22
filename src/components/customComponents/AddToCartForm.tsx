"use client";

import { useCartStore } from "@/stores/cart-store";
import { Product } from "../../../schema";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
interface PropType {
  product: Product;
}

const AddToCartForm = ({ product }: PropType) => {
  const { addToCart, cart } = useCartStore();
  const handleSubmit = (
    product: Product,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    addToCart(product);
    toast.success("Item Added To Cart");
    console.log(cart);
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(product, e)}
      className="flex flex-col items-center gap-3"
    >
      {product.sizes && (
        <Select required>
          <SelectTrigger className="w-[180px] cursor-pointer">
            <SelectValue placeholder="Sizes" />
          </SelectTrigger>
          <SelectContent>
            {product.sizes?.map((size) => (
              <SelectItem value={size} key={size} className="cursor-pointer">
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
      <p className="font-extrabold py-2">{product.price}</p>
      <Button
        className="cursor-pointer hover:scale-101 transition-all duration-400"
        size={"lg"}
      >
        Add To Cart
      </Button>
    </form>
  );
};
export default AddToCartForm;
