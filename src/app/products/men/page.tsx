import { getMensProducts } from "@/lib/GetProducts";
import Image from "next/image";
import "@fontsource/dancing-script";
import ProductCard from "@/components/customComponents/ProductCard";

const menProducts = async () => {
  const products = await getMensProducts();
  if (products) console.log(products);
  return (
    <div>
      <h1
        className="text-5xl font-bold text-left py-3"
        style={{ fontFamily: "Dancing Script" }}
      >
        Men's Products
      </h1>
      {products &&
        products[0].items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};
export default menProducts;
