import BlogList from "@/app/components/BlogList";
import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Blog Grids | Saturn",
};

const Blog = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const safePosts = Array.isArray(posts) ? posts : [];

  const breadcrumbLinks = [
    { href: "/", text: "Anasayfa" },
    { href: "/blog", text: "Blog" },
  ];
  return (
    <>
      <HeroSub
        title="Blog"
        description="Bilgi, ilham ve güncel içerikler burada."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="flex flex-wrap justify-center dark:bg-darkmode">
        <div className="container px-4">
          <div className="grid grid-cols-12 lg:px-4 px-0 gap-7">
            {safePosts.map((blog, i) => (
              <div key={i} className="w-full lg:col-span-4 md:col-span-6 col-span-12">
                <BlogList blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
