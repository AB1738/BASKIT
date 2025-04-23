

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


export type CartItem={
    id:number,
    name:string,
    image:string,
    description:string,
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
  clearCart:()=>void
}



export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            cart:[],
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
                 return { cart: state.cart };
        
        }),
        decrementQty:(id)=>set((state)=>{
            const foundProduct=state.cart.find((prod)=>prod.id===id)
            if(foundProduct){
        
                return {cart:state.cart.map((prduct)=>{
                     if(foundProduct.id===prduct.id){
                         return {...prduct,qty:prduct.qty-1}
                     }else
                     return prduct
                 }).filter((prod)=>prod.qty!==0)}
         
                 }
                 return { cart: state.cart };
        
        }),
            removeFromCart:(id)=>set((state)=>({cart:state.cart.filter((prod)=>prod.id!==id)})),
        
            clearCart:()=>set({cart:[]})
          }),       {
                     name: 'cart-storage',
                   storage: createJSONStorage(() => localStorage),
                 },
    )
)


