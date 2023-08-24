import React, { Suspense } from "react";

const loadingJSX = (
  <div>
    <h3>loading...</h3>
  </div>
);

const SuspenseLoading = ({ children }) => {
  return <Suspense fallback={loadingJSX}>{children}</Suspense>;
};

export default SuspenseLoading;
