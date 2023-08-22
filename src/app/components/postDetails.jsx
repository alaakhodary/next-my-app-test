import React from "react";

const PostDetails = async ({ postId }) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const posts = await response.json();

  return (
    <div
      style={{
        width: "70%",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "10px",
      }}
    >
      <h1>{posts?.title}</h1>
      <h2>{posts?.body}</h2>
    </div>
  );
};

export default PostDetails;
