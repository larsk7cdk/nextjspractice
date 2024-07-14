import React from "react";

export default function page({ params }: { params: { postid: string } }) {
  return (
    <div>
      <h1 className="text-9xl">Details Page with the ID: {params.postid}</h1>
    </div>
  );
}
