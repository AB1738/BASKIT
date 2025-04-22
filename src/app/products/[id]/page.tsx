import { getProductById } from "@/lib/GetProducts";

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
  return (
    <div>
      <h1>{product?.name}</h1>
    </div>
  );
};
export default productPage;
