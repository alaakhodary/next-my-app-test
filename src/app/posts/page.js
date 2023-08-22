import Link from "next/link";
import { Suspense } from "react";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();

  const postsJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`}>
        <div
          style={{
            width: "70%",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          <h1>{post.title}</h1>
          <h2>{post.body}</h2>
        </div>
      </Link>
    );
  });

  const loadingJSX = (
    <div>
      <h3>loading...</h3>
    </div>
  );

  return (
    <>
      <h2 style={{ marginBottom: "10px" }}>PostsPage</h2>
      <Suspense fallback={loadingJSX}>
        <div>{postsJSX}</div>
      </Suspense>
    </>
  );
}
