"use client";
import { useCartStore } from "@/stores/cart-store";
import Image from "next/image";

const cartPage = () => {
  const { cart, clearCart, removeFromCart, addToCart } = useCartStore();
  console.log(cart);
  return (
    <div>
      <h1></h1>
      {cart.length < 1 ? (
        <h2>There are no items in your cart</h2>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row">
            <h2>{item.name}</h2>
            <Image
              src={item.image}
              alt={item.description}
              height={400}
              width={400}
            />
            <p>{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default cartPage;
