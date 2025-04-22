import { getWomensProducts } from "@/lib/GetProducts";
import Image from "next/image";

const womenProducts = async () => {
  const products = await getWomensProducts();
  if (products) console.log(products);
  return (
    <div>
      womenProducts
      {products &&
        products[0].items.map((product) => (
          <Image
            key={product.id}
            alt={product.description}
            height={500}
            width={500}
            src={product.image}
          />
        ))}
    </div>
  );
};
export default womenProducts;
