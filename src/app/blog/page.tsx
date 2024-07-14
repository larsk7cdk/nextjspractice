import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Link href='/'>Home</Link>

      <h1>
        <Link href='blog/1'>Blog Post 1</Link>
      </h1>
      <h1>
        <Link href='blog/2'>Blog Post 2</Link>
      </h1>
      <h1>
        <Link href='blog/3' replace>Blog Post 3 (replace sender tilbage til Home)</Link>
      </h1>
      <h1>Blog Post 4</h1>
      <h1>Blog Post 5</h1>
      <h1>Blog Post 6</h1>
      <h1>Blog Post 7</h1>
      <h1>Blog Post 8</h1>
    </div>
  );
}
