import { getAccessories } from "@/lib/GetProducts";
import Image from "next/image";

const Accessories = async () => {
  const products = await getAccessories();
  if (products) console.log(products);
  return (
    <div>
      Accessories
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
export default Accessories;
