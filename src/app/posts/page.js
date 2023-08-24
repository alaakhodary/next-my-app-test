import Link from "next/link";
import SuspenseLoading from "../components/SuspenseLoading";

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

  return (
    <>
      <h2 style={{ marginBottom: "10px" }}>PostsPage</h2>
      <SuspenseLoading>
        <div>{postsJSX}</div>
      </SuspenseLoading>
    </>
  );
}
