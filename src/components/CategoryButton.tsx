import Link from "next/link"
type Props = {
    category:CategoryType;
    page:string;
    search:string;
}

const CategoryButton = ({category,page,search}: Props) => {
  return (
    <Link scroll={false}  href={`${page}?search=${category.name}`} className={`border-green font-bold capitalize grid place-items-center border-2 rounded-full px-6 h-12 ${search === category.name ? "bg-green text-white" : "bg-white text-dark-blue"} `}>
        {category.name}
    </Link>

  )
}

export default CategoryButton