import React from "react";
import Link from "next/link";
import Image from "next/image";
type Props = {
  blog: BlogData;
};

const Card = ({ blog }: Props) => {
  const parsedDate = blog.publishedAt.split("").filter((item,index)=>index<=9)
  return (
    <Link
      href={`/blog/${blog.id}`}
      className="h-80 transition-all duration-300 ease-in-out hover:-translate-y-2 w-full flex gap-y-3 flex-col p-4 rounded-lg bg-white"
    >
      <Image
        alt={blog.title}
        className="h-48 object-cover w-full rounded-md"
        src={blog.image.url}
        width={blog.image.width}
        height={blog.image.height}
      />
      <h3 className="text-lg font-bold text-dark-blue">{blog.title}</h3>
      {blog.author && (
        <div className="flex gap-x-6">
          <Image
            className="rounded-full size-12"
            alt={blog.author.name}
            src={blog.author.image.url}
            width={blog.author.image.width}
            height={blog.author.image.height}
          />
          <div className="space-y-3">
            <p className="text-sm font-medium">{blog.author.name}</p>
            <p className="text-xs font-light">{parsedDate}</p>
          </div>
        </div>
      )}
    </Link>
  );
};

const Loading = ()=>{
  return(
    <div
      className="h-80  w-full flex gap-y-3 flex-col p-4 rounded-lg bg-gray-100"
    >
      <div
        className="h-48 bg-gray-300 animate-pulse w-full rounded-md"
      ></div>
      <div className="h-6 bg-gray-300 animate-pulse w-52"></div>
     
        <div className="flex gap-x-6">
          <div
            className="rounded-full bg-gray-300 animate-pulse size-12"

          ></div>
          <div className="space-y-3">
            <div className=" h-4 w-16 animate-pulse bg-gray-300 "></div>
            <div className="h-2 w-8 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
    </div>
  )
}
Card.loading = Loading
export default Card;
