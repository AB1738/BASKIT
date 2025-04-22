import { getMensProducts } from "@/lib/GetProducts";
import Image from "next/image";
const menProducts = async () => {
  const products = await getMensProducts();
  if (products) console.log(products);
  return (
    <div>
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
export default menProducts;
