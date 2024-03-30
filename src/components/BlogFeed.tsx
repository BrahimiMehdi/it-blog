import { getBlogs } from "@/lib/queries"
import Card from "./Card";
type Props = {}

const BlogFeed = async(props: Props) => {
    const blogs = await getBlogs();
  return (
    <section className="flex flex-col gap-y-8 items-center">
        <h2 className='text-4xl font-bold text-white'>
            Blog Feed
        </h2>
        <p className='max-w-80 bg-clip-text text-transparent font-medium text-lg text-center bg-gradient-to-b from-emerald-200 to-green'>
            Browse for continous insights on technology and programing
        </p>
        <div className='grid w-full [grid-template-columns:_repeat(_auto-fill,_minmax(18rem,_1fr));]'>
            {blogs.map((blog,index)=>(
                <Card blog={blog} key={index} />
            ))}
        </div>
    </section>
  )
}

export default BlogFeed