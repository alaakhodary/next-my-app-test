import React from "react";

export const metadata = {
  title: "article page",
};

export default function articleLayout({ children }) {
  return (
    <div style={{ backgroundColor: "red", padding: "20px" }}>{children}</div>
  );
}
