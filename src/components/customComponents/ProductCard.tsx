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
      <Card className="h-140 hover:scale-101 transition-all duration-500">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            key={product.id}
            alt={product.description}
            height={1000}
            width={1000}
            src={product.image}
            className="h-90 pb-3"
          />
          <CardDescription>{product.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-end">
          <p className="text-xs font-bold">{product.price}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};
export default ProductCard;
