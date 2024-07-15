"use client";
import React from "react";

export default function errorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1 className="p-4 bg-red-200 text-4xl">{error.message}</h1>
    </div>
  );
}
