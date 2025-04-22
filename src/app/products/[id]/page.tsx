import { getProductById } from "@/lib/GetProducts";
import Image from "next/image";
import "@fontsource/dancing-script";

import { notFound } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface PropType {
  params: {
    id: string;
  };
}
const productPage = async ({ params }: PropType) => {
  const { id } = await params;
  const foundProduct = await getProductById(parseInt(id));
  const product = foundProduct?.[0][0];
  console.log(product);
  if (!product) {
    return notFound();
  }
  return (
    <div className="flex flex-col">
      <h1
        className="text-4xl sm:text-4xl font-bold text-center sm:text-left py-4"
        style={{ fontFamily: "Dancing Script" }}
      >
        {product.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <Image
          key={product.id}
          alt={product.description}
          height={1000}
          width={1000}
          src={product.image}
          className="h-150 pb-3"
        />
        <div className="flex flex-col justify-center items-center gap-5">
          <h1
            className="text-4xl sm:text-4xl font-bold text-center sm:text-left py-4"
            style={{ fontFamily: "Dancing Script" }}
          >
            Because You Deserve It
          </h1>
          <p className="text-center">{product.description}</p>
          <Select>
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
          <p className="font-extrabold">{product.price}</p>
          <Button className="cursor-pointer">Add To Cart</Button>
        </div>
      </div>
    </div>
  );
};
export default productPage;
