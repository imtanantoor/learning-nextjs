import Link from "next/link";

export default function posts({ posts }) {
  return (
    <div>
      <ul>
        {posts &&
          posts.length > 0 &&
          posts.map((post) => (
            <Link key={post.product_id} href={"posts/" + post.product_id}>
              {post.name}
            </Link>
          ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("http://localhost:3006/products");
  const result = await data.json();

  return {
    props: {
      posts: result,
    },
  };
}
