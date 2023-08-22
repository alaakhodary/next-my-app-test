import React from "react";

export const metadata = {
  title: "posts page",
};

export default function postsLayout({ children }) {
  return (
    <div style={{ backgroundColor: "blue", padding: "20px" }}>{children}</div>
  );
}
