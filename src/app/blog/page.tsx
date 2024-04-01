import BlogFeed from "@/components/BlogFeed";
import React from 'react'


const Blog = ({searchParams}:{searchParams:any}) => {
    const search = searchParams.search
  return (
    <main className="flex min-h-screen flex-col items-center py-8 justify-between p-16">
        <BlogFeed search={search} page="/blog" />
    </main>

  )
}

export default Blog