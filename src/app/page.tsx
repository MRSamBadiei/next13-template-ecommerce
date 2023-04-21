import { Inter } from "next/font/google";
import Slider from "./Slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div
        className="bg-gray-200 mt-10 p-6 bg-cover bg-top rounded-md"
        style={{
          backgroundImage: `url(/images/t1.jpg)`,
        }}
      >
        <div className="ml-8">
          <p className="font-bold text-2xl">40% OFF</p>
          <p className="font-light mt-1">
            Best Deals this week. Fresh flowers, plants and gifts
          </p>
          <div className="bg-black w-32 flex text-center rounded-md mt-4">
            <p className="p-2 text-white hover:cursor-pointer">Shop Now</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 my-auto text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <div
          className="w-1/2 bg-cover rounded-md mr-10"
          style={{
            backgroundImage: `url(/images/l1.jpg)`,
          }}
        >
          <div className="p-8 w-1/2 ml-auto">
            <p className="font-bold text-md">Nice little gifts</p>
            <p className="font-light text-sm">for loved ones</p>
            <div className="rounded-md mt-4">
              <div className="flex">
                <p className="hover:cursor-pointer">View now</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-1/2 bg-cover rounded-md"
          style={{
            backgroundImage: `url(/images/r1.jpg)`,
          }}
        >
          <div className="p-8 w-1/2 ml-auto">
            <p className="font-bold text-md">Plants</p>
            <p className="font-light text-sm">for home comfort</p>
            <div className="rounded-md mt-4">
              <div className="flex">
                <p className="hover:cursor-pointer">View now</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 md:p-0">
        <Slider params={{ title: "New" }} />
      </div>
      <div className="p-5 md:p-0">
        <Slider params={{ title: "Fresh" }} />
      </div>
    </div>
  );
}
