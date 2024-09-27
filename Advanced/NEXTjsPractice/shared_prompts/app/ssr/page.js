async function Page({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: "no-store" } // remove for SSG, replace with { next: {revalidate: 10} } for ISR
  );
  const data = await res.json();

  return (
    <div>
      <h2>{data.title}</h2>
      <p>body: {data.body}</p>
    </div>
  );
}
