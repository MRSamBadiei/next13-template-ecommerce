import Link from "next/link";
import ImageView from "./image-view";

export default function Plant() {
  return (
    <div className="p-5 md:p-0">
      <div className="text-sm mb-0 mt-16 md:mb-10 md:mt-10">
        <Link className="font-light" href="/">
          Home
        </Link>
        <span className="font-light mx-4">/</span>
        <Link className="font-medium" href="/plants">
          Plants
        </Link>
      </div>

      <p className="mt-5 md:mt-10 font-semibold text-3xl">All Plants</p>

      <ImageView />
      <div className="text-white w-60 rounded h-10 bg-black flex mx-auto  mb-36 mt-10">
        <p className="my-auto mx-auto">See More</p>
      </div>
    </div>
  );
}
