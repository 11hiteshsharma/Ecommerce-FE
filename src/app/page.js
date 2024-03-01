import Image from "next/image";

export default function Home() {
  return (
  <div className="min-h-[100vh]">
      <Image src='https://images.pexels.com/photos/5119930/pexels-photo-5119930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="banner" fill/>
    </div>
  );
}
