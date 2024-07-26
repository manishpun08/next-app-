import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>hello</h1>
      <Link
        className="my-5 bg-sky-400 text-white text-xl hover:bg-sky-600 "
        href={"/users"}
      >
        navigate user
      </Link>
      <ProductCard />
    </main>
  );
}
