import React from "react";

function DynamicNewsPage({ params, searchParams }) {
  return (
    <div>
      <h1>This is dynamic page of id:{params.id} </h1>
    </div>
  );
}

export default DynamicNewsPage;
