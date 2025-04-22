

import { create } from 'zustand'

export type CartItem={
    id:number,
    name:string,
    image:string,
    description:string,
    // quantity:number,
    sizes?:string,
    price:number,
}

export type CartStore = {
  cart:CartItem[],
  totalItems: number,
  totalPrice: number,
  addToCart:(item:CartItem)=>void,
  removeFromCart:(id:number)=>void,
//   getTotalPrice:()=>number,
  clearCart:()=>void
}
export const useCartStore = create<CartStore>((set) => ({
    cart:[],
    totalItems:0,
    totalPrice:0,
    addToCart:(item)=>set((state)=>({cart:[...state.cart,item]})),
    removeFromCart:(id)=>set((state)=>({cart:state.cart.filter((prod)=>prod.id!==id)})),
    // getTotalPrice:()=>set((state)=>({cart:state.cart.reduce((acc,prod)=>{
    //     acc+=prod.totalPrice
    // },0)})),
    clearCart:()=>set({cart:[]})
  }));
  

//     incrementCount: () => set((state) => ({ count: state.count + 1 })),

// addToCart:(item)=>set((state)=>({cart:[...state.cart,item]})),
// removeFromCart:(id)=>set((state)=>({cart:state.cart.filter((prod)=>prod.id!==id)})),
[
    {
        id:1,
        name:'product name',
        image:'product image',
        description:'product description',
        quantity:'2',
        price:10,
        totalPrice:20
    }
]

//addToCart() [if item already exists in cart, then increment the quantity]
//removeFromCart()[if quantity reaches zero in cart, remove from cart] 
//clearCart()[set cart to empty array]