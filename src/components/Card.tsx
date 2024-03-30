import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
type Props = {
    blog:BlogData
}

const Card = ({blog}: Props) => {
  return (
    <article className="w-80 h-full flex gap-y-3 flex-col p-4 rounded-lg bg-white">
        <Image alt={blog.title} className="h-48 object-cover w-full rounded-md" src={blog.image.url} width={blog.image.width} height={blog.image.height}  />
        <h3 className="text-lg font-bold text-dark-blue">
            {blog.title}
        </h3>
        <Link className="border-light-blue grid place-items-center border-2 rounded-full px-16 h-12 bg-white text-light-blue font-medium" href={`/blog/${blog.id}`}>
            See more
        </Link>
    </article>
  )
}

export default Card