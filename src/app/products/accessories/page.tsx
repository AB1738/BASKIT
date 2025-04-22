import { getAccessories } from "@/lib/GetProducts";

const Accessories = async () => {
  const products = await getAccessories();
  if (products) console.log(products);
  return (
    <div>
      Accessories <p></p>
    </div>
  );
};
export default Accessories;
