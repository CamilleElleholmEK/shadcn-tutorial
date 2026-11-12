import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const ArticleCard = () => {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <Image
          src="/coffee.webp"
          width={500}
          height={500}
          alt="Cup of coffee"
          className="rounded-md"
        />
        <CardTitle>
          How to make the perfect morning coffee, according to science
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <Avatar className="size-10">
            <AvatarImage src="https://avatars.githubusercontent.com/u/228881462?v=4" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">Camille Elleholm</p>
            <p>Nov 12, 2026</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Read article</Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
