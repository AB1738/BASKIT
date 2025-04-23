

import { create } from 'zustand'

export type CartItem={
    id:number,
    name:string,
    image:string,
    description:string,
    // quantity:number,
    sizes?:string,
    price:number,
    qty:number
}

export type CartStore = {
  cart:CartItem[],
  addToCart:(item:CartItem)=>void,
  incrementQty:(id:number)=>void,
  decrementQty:(id:number)=>void,
  removeFromCart:(id:number)=>void,
//   getTotalPrice:()=>number,
  clearCart:()=>void
}
export const useCartStore = create<CartStore>((set) => ({
    cart:[],
    totalItems:0,
    totalPrice:0,
    addToCart:(item)=>set((state)=>{
        const foundProduct=state.cart.find((prod)=>prod.id===item.id)



        if(foundProduct){

       return {cart:state.cart.map((prduct)=>{
            if(foundProduct.id===prduct.id){
                return {...prduct,qty:prduct.qty+1}
            }else
            return prduct
        })}

        }
        else{
            return {cart:[...state.cart,item]}
        }
}),
incrementQty:(id)=>set((state)=>{
    const foundProduct=state.cart.find((prod)=>prod.id===id)
    if(foundProduct){

        return {cart:state.cart.map((prduct)=>{
             if(foundProduct.id===prduct.id){
                 return {...prduct,qty:prduct.qty+1}
             }else
             return prduct
         })}
 
         }
}),
decrementQty:(id)=>set((state)=>{
    const foundProduct=state.cart.find((prod)=>prod.id===id)
    if(foundProduct){

        return {cart:state.cart.map((prduct)=>{
             if(foundProduct.id===prduct.id){
                 return {...prduct,qty:prduct.qty-1}
             }else
             return prduct
         })}
 
         }
}),
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
    },
    {
        id:2,
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