export const dynamicParams = false;
import { getBlogDetails, getBlogs } from "@/lib/queries";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import CategoryButton from "@/components/CategoryButton";
export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}
export default async function BlogDetails({ params }: any) {
  const blogDetails = await getBlogDetails(params.id);
  const parsedDate = blogDetails.publishedAt.split("").filter((item,index)=>index<=9)

  return (
    <main className="flex bg-white min-h-screen flex-col items-center py-8 justify-between p-16">
      <div className="absolute z-0 inset-0 w-full bg-dark-blue h-[calc(100dvh-10rem)]"></div>
      <div className="decoration-transparent z-[1] mb-8 max-w-64">
        <CategoryButton page="/blog" category={blogDetails.category} />
      </div>
      <article className=" relative z-[1]  max-w-5xl w-full prose">
        <h1 className="text-center text-white text-6xl">{blogDetails.title}</h1>
        <Image
          alt={blogDetails.title}
          className="object-cover  w-full aspect-video  rounded-lg"
          src={blogDetails.image.url}
          width={blogDetails.image.width}
          height={blogDetails.image.height}
        />

        <div className="grid grid-cols-12 gap-8 h-full w-full">
          <div className="col-span-8">
            <RichText content={blogDetails.content.raw} />
          </div>
          <div className="col-span-4 h-full w-full">
            {blogDetails.author && (
              <>
              <p className="text-xl font-bold my-0 border-b-2 border-b-gray-200 py-3">Author</p>
              <div className="flex h-fit items-center gap-x-6">
                <Image
                  className="rounded-full size-16"
                  alt={blogDetails.author.name}
                  src={blogDetails.author.image.url}
                  width={blogDetails.author.image.width}
                  height={blogDetails.author.image.height}
                />
                <div className="space-y-2">
                  <h2 className="text-sm font-medium my-0">{blogDetails.author.name}</h2>
                  <p className="text-xs font-light my-0">{parsedDate}</p>
                </div>
              </div>
              </>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
