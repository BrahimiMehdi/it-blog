import React from "react";
import Card from "./Card";
import Link from "next/link";
import CategoryButton from "./CategoryButton";
import { getCategories } from "@/lib/queries";
type Props = {
  page: string;
};
const CategoriesSection = async ({ page }: Props) => {
  const categories = await getCategories();
  return (
    <div className="w-full  max-w-4xl gap-x-4 flex-wrap gap-y-4 flex items-center justify-evenly">
      {/* this part handles filtering using searchParams by simply pushing a param to the url using the nextjs link component */}
      <Link
      prefetch={false}
        scroll={false}
        href={`${page}`}
        className={`border-green font-bold capitalize grid place-items-center border-2 rounded-full px-6 h-12 
          focus:bg-green focus:text-white bg-white text-dark-blue
         `}
      >
        All
      </Link>

      {categories.map((category, index) => (
        <CategoryButton  page={page} key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoriesSection;
