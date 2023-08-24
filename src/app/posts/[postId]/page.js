import SuspenseLoading from "@/app/components/SuspenseLoading";
import PostDetails from "@/app/components/postDetails";
import React from "react";

const ShowPostDetails = async ({ params }) => {
  const postId = params.postId;

  return (
    <>
      <h1 style={{ color: "white" }}>Post Details</h1>
      <SuspenseLoading>
        <PostDetails postId={postId} />
      </SuspenseLoading>
    </>
  );
};

export default ShowPostDetails;
