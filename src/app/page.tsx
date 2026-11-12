import ArticleCard from "@/components/ArticleCard";
import Products from "@/components/Products";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <div className="p-8">
      <h1>Shadcn Tutorial</h1>
      <div className="grid gap-10 mt-4">
        <ArticleCard />
        <Products />
        <ProfileCard />
      </div>
    </div>
  );
}
