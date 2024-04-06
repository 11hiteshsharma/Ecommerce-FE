import HomePage from "./Components/Home";

async function getAllProducts() {
  const post = await fetch(`https://fakestoreapi.com/products`, {
    method: "GET",
  });
  return await post.json();
}

export default async function Home() {
  const data = await getAllProducts();
  console.log(data, "data");
  return <HomePage data={data} />;
}
