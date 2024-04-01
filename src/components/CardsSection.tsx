import { getBlogs } from "@/lib/queries";
import Card from "./Card";
import React from "react";


const CardsSection = async ({ search, page }: { search: string; page: string }) => {
  const blogs = await getBlogs();
  const filteredBlogs = search && search !== "" ? blogs.filter((blog) => blog.category.name === search) : blogs;
  return (
      <div className="grid w-full mt-6 gap-8 [grid-template-columns:_repeat(_auto-fill,_minmax(16rem,_1fr));]">
        {filteredBlogs.map((blog, index) => (
          <Card blog={blog} key={index} />
        ))}
      </div>
  );
};

export default CardsSection;
