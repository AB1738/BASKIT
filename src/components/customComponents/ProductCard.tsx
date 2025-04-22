import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "../../../schema";
import Image from "next/image";
import Link from "next/link";

interface ProductsPropType {
  product: Product;
}

const ProductCard = ({ product }: ProductsPropType) => {
  return (
    <Link href={`/products/${product.id}`}>
      <Card>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            key={product.id}
            alt={product.description}
            height={500}
            width={500}
            src={product.image}
          />
        </CardContent>
        <CardFooter>
          <p>{product.price}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};
export default ProductCard;
