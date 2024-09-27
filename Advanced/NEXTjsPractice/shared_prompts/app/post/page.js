import React from "react";

export const metadata = {
  title: "Home",
};

// Output:
// <head>
//  <title>Home</title>
// </head>

export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);
  return { title: product.title };
}

// Output:
// <head>
//  <title>My Unique Product Title</title>
// </head>

const page = () => {
  return <div>page</div>;
};

export default page;
