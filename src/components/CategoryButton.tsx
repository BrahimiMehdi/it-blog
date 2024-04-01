import Link from "next/link"
type Props = {
    category:CategoryType;
    page:string;
}

const CategoryButton = ({category,page}: Props) => {
  return (
    <Link prefetch={false} scroll={false}  href={`${page}?search=${category.name}`} className={`border-green 
    focus:bg-green focus:text-white bg-white text-dark-blue

     font-bold capitalize grid place-items-center border-2 rounded-full px-6 h-12  `}>
        {category.name}
    </Link>

  )
}

export default CategoryButton