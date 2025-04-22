import { getMensProducts } from "@/lib/GetProducts";
const menProducts = async () => {
  const products = await getMensProducts();
  if (products) console.log(products);
  return (
    <div>
      menProducts
      <p></p>
    </div>
  );
};
export default menProducts;
