import LeftSideBar from "@/Component/homepage/LeftSideBar";
import NewsCard from "@/Component/homepage/NewsCard";
import RightSideBar from "@/Component/homepage/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";



const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="w-300 mx-auto grid grid-cols-12 gap-4 my-16 px-4">
      <div className="col-span-3  p-2">
        <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
      </div>
      <div className="col-span-6 p-2">
        <h2 className="font-bold text-lg">News By Category</h2>
        <div className="space-y-4 mt-6">
          {news.length>0 ? news.map((n) => {
            return <NewsCard key={n._id} news={n}></NewsCard>;
          }):<h2 className="font-bold text-5xl text-center my-7">No News Found!</h2>}
        </div>
      </div>
      <div className="col-span-3 ">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
