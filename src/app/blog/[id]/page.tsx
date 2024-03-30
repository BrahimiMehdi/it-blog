export const dynamicParams = false;
import { getBlogDetails,getBlogs } from "@/lib/queries";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";

export async function generateStaticParams() {
    const blogs = await getBlogs()
    return blogs.map((blog) => ({
        id: blog.id,
      }))
}
export default async function BlogDetails({ params }: any) {
  const blogDetails = await getBlogDetails(params.id);
  return (
    <main className="flex min-h-screen flex-col items-center py-8 justify-between p-16">
      <article className="prose-invert prose">
        <Image
          alt={blogDetails.title}
          className="object-cover rounded-lg"
          src={blogDetails.image.url}
          width={blogDetails.image.width}
          height={blogDetails.image.height}
        />

        <RichText content={blogDetails.content.raw} />
      </article>
    </main>
  );
}
