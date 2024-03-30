import HeroSection from "@/components/HeroSection";
import BlogFeed from "@/components/BlogFeed";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-8 justify-between p-16">
      <HeroSection />
      <BlogFeed />
    </main>
  );
}
