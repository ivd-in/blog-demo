// app/(blog)/posts/[slug]/page.tsx

import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";
import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { Post } from "@/components/Post";
import type { Metadata } from "next";

// Generate static paths for all posts
export async function generateStaticParams() {
  const posts = await client.fetch(POSTS_QUERY);

  return posts.map((post: { slug: { current: string } }) => ({
    slug: post?.slug?.current,
  }));
}

// Dynamically generate metadata
export async function generateMetadata({
  params,
}: {
  params: QueryParams;
}): Promise<Metadata> {
  const post = await client.fetch(POST_QUERY, params);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This post could not be found.",
    };
  }

  const { title, excerpt, mainImage } = post;

  return {
    title: title || "Untitled Post",
    description: excerpt || "Read this blog post on our platform.",
    openGraph: {
      title: title || "Untitled Post",
      description: excerpt || "Read this blog post on our platform.",
      images: [
        {
          url: mainImage?.asset?.url || "/default-og-image.jpg",
          alt: title || "Untitled Post",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title || "Untitled Post",
      description: excerpt || "Read this blog post on our platform.",
      images: [mainImage?.asset?.url || "/default-og-image.jpg"],
    },
  };
}

// Render the blog post page
export default async function Page({
  params,
}: {
  params: QueryParams;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params,
  });

  if (!post) {
    return notFound();
  }

  return <Post post={post} />;
}
