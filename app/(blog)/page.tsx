// app/(blog)/page.tsx

import { Posts } from "@/components/Posts";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  return (
    <section>
      <h1 className="text-xl font-black md:text-9xl text-center">Blog Demo</h1>

      <div className="py-10">

      <Posts posts={posts} />
      </div>
    </section>
  );
}