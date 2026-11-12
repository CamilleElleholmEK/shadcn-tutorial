import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default async function ProductCard({ product }) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <Image
          src={product.images[0]}
          width={500}
          height={500}
          alt="Cup of coffee"
          className="rounded-md"
        />
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{product.price}</p>
      </CardContent>
    </Card>
  );
}
