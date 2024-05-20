import AllArticles from "@/app/articles/page"
import Ad from "@/components/Ad";
import FlashNav from "@/components/FlashNav";

export default async function Home() {

  return (
    <div className="grid grid-cols-3 gap-4">
    <div className="col-span-1">
      <FlashNav  />
    </div>
    <div className="col-span-2">
      <Ad />
      <AllArticles />
    </div>
  </div>
  )
}