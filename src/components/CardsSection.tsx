import { getBlogsAndCategories } from "@/lib/queries";
import React from "react";
import Card from "./Card";
import Link from "next/link";
import CategoryButton from "./CategoryButton";

const CardsSection = async ({ search, page }: { search: string; page: string }) => {
  const { blogs, categories } = await getBlogsAndCategories();
  const filteredBlogs = search && search !== "" ? blogs.filter((blog) => blog.category.name === search) : blogs;
  return (
    <>
      <div className="w-full  max-w-4xl gap-x-4 flex-wrap gap-y-4 flex items-center justify-evenly">
        {/* this part handles filtering using searchParams by simply pushing a param to the url using the nextjs link component */}
        <Link
          scroll={false}
          href={`${page}`}
          className={`border-green font-bold capitalize grid place-items-center border-2 rounded-full px-6 h-12 ${
            !search || search === "" ? "bg-green text-white" : "bg-white text-dark-blue"
          } `}
        >
          All
        </Link>

        {categories.map((category, index) => (
          <CategoryButton search={search} page={page} key={index} category={category} />
        ))}
      </div>
      <div className="grid w-full mt-6 gap-8 [grid-template-columns:_repeat(_auto-fill,_minmax(16rem,_1fr));]">
        {filteredBlogs.map((blog, index) => (
          <Card blog={blog} key={index} />
        ))}
      </div>
    </>
  );
};

export default CardsSection;
