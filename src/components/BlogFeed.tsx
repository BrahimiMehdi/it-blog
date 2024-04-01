export const revalidate = 3600;
import { getBlogsAndCategories } from "@/lib/queries";
import Card from "./Card";
import Link from "next/link";
import { Suspense } from "react";
import CategoryButton from "./CategoryButton";
import CardsSection from "./CardsSection";
type Props = {
  page: string;
  search: string;
};

const BlogFeed = ({ page, search }: Props) => {
  return (
    <section className="flex w-full min-h-[40rem] max-w-7xl flex-col gap-y-8 items-center">
      <h2 className="text-4xl font-bold text-white">Blog Feed</h2>
      <p className="max-w-80 bg-clip-text text-transparent font-medium text-lg text-center bg-gradient-to-b from-emerald-200 to-green">
        Browse for continous insights on technology and programing
      </p>
      {/* this is the streamed in data with a loading state for a fallback */}

      <Suspense
        fallback={
          <>
            <div className="w-full  max-w-4xl gap-x-4 flex-wrap gap-y-4 flex items-center justify-evenly">
              {Array(12)
                .fill(0)
                .map((item, index) => (
                  <div
                    key={index}
                    className={` font-bold capitalize grid place-items-center rounded-full px-12 h-12 bg-gray-200 animate-pulse`}
                  ></div>
                ))}
            </div>
            <div className="grid w-full mt-6 gap-8 [grid-template-columns:_repeat(_auto-fill,_minmax(16rem,_1fr));]">
              <Card.loading />
              <Card.loading />
              <Card.loading />
              <Card.loading />
            </div>
          </>
        }
      >
        <CardsSection page={page} search={search} />
      </Suspense>
    </section>
  );
};

export default BlogFeed;
