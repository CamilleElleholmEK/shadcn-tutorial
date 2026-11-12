import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <Card className="grid grid-cols-2 p-6 w-fit">
      <Image
        src="/profilepic.webp"
        width={500}
        height={500}
        alt="Cup of coffee"
        className="rounded-md size-45 mt-6"
      />
      <div className=" h-full flex flex-col justify-between pt-6">
        <CardHeader className="px-0">
          <CardTitle>Alex Morrison</CardTitle>
          <CardDescription>Senior Journalist</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row gap-6 bg-gray-200 p-3 rounded-md">
          <div>
            <p className="opacity-50">Articles</p>
            <p className="font-semibold text-xl">34</p>
          </div>
          <div>
            <p className="opacity-50">Followers</p>
            <p className="font-semibold text-xl">980</p>
          </div>
          <div>
            <p className="opacity-50">Rating</p>
            <p className="font-semibold text-xl">8.9</p>
          </div>
        </CardContent>
        <CardFooter className="px-0 w-fit gap-4">
          <Button className="px-8" variant="outline">
            Chat
          </Button>
          <Button className="px-8" variant="default">
            Follow
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProfileCard;
