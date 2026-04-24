

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
        <h2 className="font-bold text-lg">All Categories</h2>
        <ul className="flex flex-col gap-4 mt-4">
          {categories.news_category.map((category) => {
            return <li key={category.category_id} className="bg-slate-100 font-bold rounded-md text-center text-md p-2">{category.category_name}</li>;
          })}
        </ul>
      </div>
      <div className="font-bold col-span-6 p-2">All News</div>
      <div className="font-bold col-span-3 p-2">Social Icons</div>
    </div>
  );
}
