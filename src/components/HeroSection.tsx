import Image from "next/image";
import BgVecs from "../../public/bg-vecs.svg";
import Link from "next/link";
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section
      className="flex overflow-hidden w-full justify-center min-h-96 flex-col items-center gap-y-8 relative"
      aria-label="Hero section of the page"
    >
      <div className="flex flex-col items-center gap-y-8 z-[2]">
        <h1 className="text-6xl max-w-3xl text-white text-center font-bold">
          All the tech knowledge you need in <span className="text-green">it</span> Blog.
        </h1>
        <Link href="/blog" className="border-light-blue grid place-items-center border-2 rounded-full px-16 h-12 bg-white text-light-blue font-medium">Explore</Link>
      </div>
      <Image alt="" src={BgVecs} className="absolute scale-150 z-0 opacity-50 inset-0 h-full w-full object-contain" />
    </section>
  );
};

export default HeroSection;
