import ArticleCard from "@/components/ArticleCard";
import Products from "@/components/Products";
import ProfileCard from "@/components/ProfileCard";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-8">
      <h1>Shadcn Tutorial</h1>
      <div className="grid grid-cols-3 gap-10 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Velkommen til shadcn</CardTitle>
            <CardDescription>
              Nu har vi hentet et card component med npx, og brugt det på en
              page.
            </CardDescription>
            <CardAction>Tilmeld dig nyhedsbrev</CardAction>
          </CardHeader>
          <CardContent>
            <p>Her kan du selv indsætte flere componenter.</p>
          </CardContent>
          <CardFooter>
            <p>I Card Footer bestemmer du også selv indholdet.</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Velkommen til et nyt card</CardTitle>
            <CardDescription>
              Det er stadig det samme component, nu står der bare noget andet.
            </CardDescription>
            <CardAction>Klik her!</CardAction>
          </CardHeader>
          <CardContent>
            <p>Hvad skal der mon står her?</p>
          </CardContent>
          <CardFooter>
            <p>Hvad med hernede?</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Velkommen til det sidste card</CardTitle>
            <CardDescription>
              Her kan du kort forklare hvad kortets funktion er. Måske er det et
              produktkort?
            </CardDescription>
            <CardAction>Klik på mig!</CardAction>
          </CardHeader>
          <CardContent>
            <p>Hmmm, hvad synes du der skal være her?</p>
          </CardContent>
          <CardFooter>
            <p>Har du en god ide til bunden?</p>
          </CardFooter>
        </Card>
      </div>
      <div className="grid gap-10 mt-10">
        <ArticleCard />
        <Products />
        <ProfileCard />
      </div>
    </div>
  );
}
