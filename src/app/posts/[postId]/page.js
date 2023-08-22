import PostDetails from "@/app/components/postDetails";
import React, { Suspense } from "react";

const ShowPostDetails = async ({ params }) => {
  const postId = params.postId;

  const loadingJSX = (
    <div>
      <h3>loading...</h3>
    </div>
  );

  return (
    <>
      <h1 style={{ color: "white" }}>Post Details</h1>
      <Suspense fallback={loadingJSX}>
        <PostDetails postId={postId} />
      </Suspense>
    </>
  );
};

export default ShowPostDetails;
