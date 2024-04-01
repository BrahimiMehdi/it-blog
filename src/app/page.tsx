import HeroSection from "@/components/HeroSection";
import BlogFeed from "@/components/BlogFeed";
import Contact from "@/components/Form/Contact";
export default function Home({searchParams}:{searchParams:any}) {
  const search =searchParams.search
  return (
    <main className="flex min-h-screen gap-y-12 flex-col items-center py-8 justify-between p-16">
      <HeroSection />
      <BlogFeed search={search} page="/" />
      <Contact />
    </main>
  );
}
