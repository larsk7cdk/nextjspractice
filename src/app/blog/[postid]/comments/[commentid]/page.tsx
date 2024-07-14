import React from "react";

export default function page({
  params
}: {
  params: { postid: string; commentid: string };
}) {
  return (
    <div>
      <h1 className="text-7xl">
        Comment {params.commentid} for blog post {params.postid}
      </h1>
    </div>
  );
}
