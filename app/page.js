import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts";
import MyNavbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <MyNavbar />
      <Hero />
      <FeaturedPosts />
    </>
  );
}
