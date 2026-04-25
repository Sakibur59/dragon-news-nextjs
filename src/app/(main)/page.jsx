import LeftSideBar from "@/Component/homepage/LeftSideBar";
import RightSideBar from "@/Component/homepage/RightSideBar";


async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}
export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="w-300 mx-auto grid grid-cols-12 gap-4 my-16 px-4">
      <div className="col-span-3  p-2">
       <LeftSideBar categories={categories} activeId={null}></LeftSideBar>
      </div>
      <div className="font-bold col-span-6 p-2">All News</div>
      <div className="col-span-3 "><RightSideBar></RightSideBar></div>
    </div>
  );
}
