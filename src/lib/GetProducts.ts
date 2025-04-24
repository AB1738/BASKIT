import productSchema from "../../schema";

export const getMensProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products.json`
    );
    const data = await response.json();
    const products = productSchema.safeParse(data);
    if (!products.success) throw new Error();
    const mensProducts = products.data.products.category.filter(
      (c) => c.name === "Mens"
    );
    return mensProducts;
  } catch (e) {
    console.error(e);
  }
};

export const getWomensProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products.json`
    );
    const data = await response.json();
    const products = productSchema.safeParse(data);
    if (!products.success) throw new Error();
    const womensProducts = products.data.products.category.filter(
      (c) => c.name === "Womens"
    );
    return womensProducts;
  } catch (e) {
    console.error(e);
  }
};

export const getAccessories = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products.json`
    );
    const data = await response.json();
    const products = productSchema.safeParse(data);
    if (!products.success) throw new Error();
    const Accessories = products.data.products.category.filter(
      (c) => c.name === "Accessories"
    );
    return Accessories;
  } catch (e) {
    console.error(e);
  }
};

const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products.json`
    );
    const data = await response.json();
    const products = productSchema.safeParse(data);
    if (!products.success) throw new Error();
    return products;
  } catch (e) {
    console.error(e);
  }
};

export const getProductById = async (id: number) => {
  try {
    const products = await getProducts();
    const product = products?.data.products.category.map((prduct) =>
      prduct.items.filter((item) => item.id === id)
    );
    const foundProduct = product?.filter((item) => item.length > 0);
    return foundProduct;
  } catch (e) {
    console.error(e);
  }
};

export default getProducts;
