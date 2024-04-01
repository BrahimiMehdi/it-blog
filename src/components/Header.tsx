import Logo from "../../public/logo-it.svg";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="h-20 sticky top-0 bg-dark-blue z-10 bg-opacity-80 backdrop-blur-sm text-white font-medium px-16 flex items-center justify-between">
      <Link href={"/"}>
      <Image priority className="size-28 object-contain" src={Logo} alt="logo of the blog" />
      </Link>
      <nav className="w-full max-w-3xl flex justify-between">
        <Link href="/">Home</Link>
        <Link href="/about">About us</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact-us">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
