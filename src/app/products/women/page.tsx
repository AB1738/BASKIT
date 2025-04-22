import { getWomensProducts } from "@/lib/GetProducts";

const womenProducts = async () => {
  const products = await getWomensProducts();
  if (products) console.log(products);
  return (
    <div>
      womenProducts
      <p></p>
    </div>
  );
};
export default womenProducts;
