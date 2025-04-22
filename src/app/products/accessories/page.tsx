import { getAccessories } from "@/lib/GetProducts";
import "@fontsource/dancing-script";
import ProductCard from "@/components/customComponents/ProductCard";

const Accessories = async () => {
  const products = await getAccessories();
  return (
    <div>
      <h1
        className="text-4xl text-center sm:text-left sm:text-5xl font-bold  py-3"
        style={{ fontFamily: "Dancing Script" }}
      >
        Accessories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {products &&
          products[0].items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default Accessories;
