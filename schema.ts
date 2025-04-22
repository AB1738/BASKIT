import {z} from 'zod'


const sizeSchema = z.enum(["S", "M", "L", "XL","0", "2", "4", "6", "8", "10" ,"28", "30", "32", "34"]);


const itemSchema=z.object({
    id:z.number(),
    name:z.string(),
    type:z.string(),
    price:z.number(),
    image:z.string(),
    description:z.string(),
    sizes: z.array(sizeSchema).optional() 
})
const categorySchema=z.object({
    name:z.enum(["Mens","Womens","Accessories"]),
    items:z.array(itemSchema)
})

const productSchema=z.object({
    products:z.object({
        category:z.array(categorySchema)
        
    })
})
export type Product=z.infer<typeof itemSchema>
export type Category=z.infer<typeof categorySchema>
export type Products=z.infer<typeof productSchema>

export default productSchema