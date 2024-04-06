import SingleProductPage from "../../Components/ProductPage/SingleProductPage";

async function getPostById(postId) {
  const post = await fetch(`https://fakestoreapi.com/products/${postId}`, {
    method: "GET",
  });
  return await post.json();
}

export default async function ProductPage({ params }) {
  const { slug } = params;
  const post = await getPostById(slug);

  return (
    <div>
      <SingleProductPage data={post} />
    </div>
  );
}
