import getProducts, { getProductById } from "@/lib/GetProducts";
import Image from "next/image";
import "@fontsource/dancing-script";

import { notFound } from "next/navigation";

import AddToCartForm from "@/components/customComponents/AddToCartForm";

export async function generateStaticParams() {
  const products = await getProducts();

  if (!products) return [];
  return products.data.products.category
    .map((item) => ({
      id: item.items.map((i) => i.id),
    }))
    .reduce<{ id: string }[]>((acc, item) => {
      const ids = item.id.map((id) => {
        return {
          id: id.toString(),
        };
      });
      return acc.concat(ids);
    }, []);
}

const productPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const foundProduct = await getProductById(parseInt(id));

  const product = foundProduct?.[0][0];
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
          className="h-150 pb-3 object-contain sm:object-fill"
        />
        <div className="flex flex-col justify-center items-center gap-5">
          <h1
            className="text-4xl sm:text-4xl font-bold text-center sm:text-left py-4 animate-pulse"
            style={{ fontFamily: "Dancing Script" }}
          >
            Because You Deserve It
          </h1>
          <p className="text-center">{product.description}</p>

          <AddToCartForm product={product} />
        </div>
      </div>
    </div>
  );
};
export default productPage;
