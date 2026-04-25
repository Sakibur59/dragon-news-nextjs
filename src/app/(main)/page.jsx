import LeftSideBar from "@/Component/homepage/LeftSideBar";
import RightSideBar from "@/Component/homepage/RightSideBar";


async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}
async function getNewsByCategoryId(category_id) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();

  const news = await getNewsByCategoryId('04');

  return (
    <div className="w-300 mx-auto grid grid-cols-12 gap-4 my-16 px-4">
      <div className="col-span-3  p-2">
       <LeftSideBar categories={categories} activeId={null}></LeftSideBar>
      </div>
      <div className="font-bold col-span-6 p-2">All News
        <div className="space-y-4">
          {
            news.map(n => {
              return <div key={n._id}>{n.title}</div>
            })
          }
        </div>
      </div>
      <div className="col-span-3 "><RightSideBar></RightSideBar></div>
    </div>
  );
}
