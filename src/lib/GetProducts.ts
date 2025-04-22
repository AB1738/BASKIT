import productSchema from "../../schema";

export const getMensProducts=async()=>{
    try{

        const response = await fetch('http://localhost:3000/products.json')
        const data = await response.json();
       const products= productSchema.safeParse(data)
        if(!products.success) throw new Error()
       const mensProducts=products.data.products.category.filter((c)=>c.name==='Mens')
        return mensProducts
    }catch(e){
        console.log(e)
        
    }
}

export const getWomensProducts=async()=>{
    try{

        const response = await fetch('http://localhost:3000/products.json')
        const data = await response.json();
       const products= productSchema.safeParse(data)
        if(!products.success) throw new Error()
       const womensProducts=products.data.products.category.filter((c)=>c.name==='Womens')
        return womensProducts
    }catch(e){
        console.log(e)
        
    }
}

export const getAccessories=async()=>{
    try{

        const response = await fetch('http://localhost:3000/products.json')
        const data = await response.json();
       const products= productSchema.safeParse(data)
        if(!products.success) throw new Error()
       const Accessories=products.data.products.category.filter((c)=>c.name==='Accessories')
        return Accessories
    }catch(e){
        console.log(e)
        
    }
}

export const getProducts=async()=>{
    try{

        const response = await fetch('http://localhost:3000/products.json')
        const data = await response.json();
       const products= productSchema.safeParse(data)
        if(!products.success) throw new Error()
        return products
    }catch(e){
        console.log(e)
        
    }
}

export default getProducts