import Layout from "../../components/layout";
import Link from "next/link";

export default function Post({ post }) {
  console.log(post);
  return (
    <Layout>
      <h1>{post.name}</h1>
      <img
        height={300}
        width={300}
        alt={post.name}
        src={
          post.images && post.images.length > 0
            ? `http://localhost:3006/uploads/productImages/${post.images[0].image_name}`
            : "https://images.unsplash.com/photo-1634579435412-f0745df22a0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
      />
      <p>{post.description}</p>
      <Link href={"/posts"}>Go back</Link>
    </Layout>
  );
}
// export async function getStaticPaths() {
//   const data = await fetch(`http://localhost:3006/products`);
//   const result = await data.json();
//   const ids = result.map((item) => item.product_id);
//   const paths = ids.map((id) => {
//     params: {
//       id: id.toString();
//     }
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }
export async function getServerSideProps(context) {
  const data = await fetch(
    `http://localhost:3006/products/${context.params.id}`
  );
  const result = await data.json();

  return {
    props: {
      post: result,
    },
  };
}
