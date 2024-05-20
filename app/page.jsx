import AllArticles from "@/app/articles/page"
import Ad from "@/components/Ad";
import FlashNav from "@/components/FlashNav";

export default async function Home() {

  return (
    <div className="flex gap-4 w-full bg-theme-bg">
      <div className="min-w-60 mt-20 ml-4">
        <FlashNav />
      </div>
      <div className="flex flex-col w-full">
        <Ad />
        <AllArticles />
      </div>
    </div>
  )
}