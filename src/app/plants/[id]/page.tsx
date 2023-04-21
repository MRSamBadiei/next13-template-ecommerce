"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getPlant } from "../../../../lib/getPlant";
import Slider from "../../Slider";
import Link from "next/link";

const colors = ["Purple", "blue", "yellow", "green"];

export default function Plants({ params }: { params: { id: number } }) {
  const [count, setCount] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [plant, setPlant] = useState<{
    id: number;
    name: string;
    imgSrc: string;
    price: number;
  }>({
    id: 1,
    name: "",
    imgSrc: "",
    price: 1,
  });

  useEffect(() => {
    getPlant(params.id.toString()).then((e) => {
      setPlant(e);
    });
  }, [params.id]);

  const add = () => {
    setCount((e) => e + 1);
  };

  const remove = () => {
    if (count > 1) setCount((e) => e - 1);
  };

  return (
    <div className="mt-10">
      <div className="text-sm mb-0 mt-16 md:mb-10 md:mt-10 p-5 md:p-0">
        <Link className="font-light" href="/">
          Home
        </Link>
        <span className="font-light mx-4">/</span>
        <Link className="font-light" href="/plants">
          Plants
        </Link>
        <span className="font-light mx-4">/</span>
        <Link className="font-medium" href={`/plants/${plant.id}`}>
          {plant.name}
        </Link>
      </div>
      <div className="flex flex-col md:flex-row mt-5 md:mt-10">
        <div className="w-full md:w-1/2 mr-10">
          <div className="bg-item rounded-none md:rounded-md">
            <Image
              src={`/images/${plant.imgSrc}`}
              width={500}
              height={500}
              alt=""
              className="w-80 h-96 mx-auto my-auto"
            />
          </div>
          <div className="justify-between mt-10 hidden md:flex">
            <div className="flex">
              <div className="flex rounded-full border-2 border-black border-solid w-12 h-12 my-auto mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto my-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <p>Always</p>
                <p>Fresh</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex rounded-full border-2 border-black border-solid w-12 h-12 my-auto mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto my-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <p>Fast</p>
                <p>Delivery</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex rounded-full border-2 border-black border-solid w-12 h-12 my-auto mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto my-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <p>Photo of</p>
                <p>Bouquet</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-5 md:w-1/2 md:p-0">
          <div className="flex flex-row md:flex-col justify-between">
            <p className="text-lg">{plant.name}</p>
            <p className="font-bold text-xl">{plant.price} $</p>
          </div>
          <div className="border-b-2 border-zinc-200 border-solid mt-3"></div>
          <div className="mt-8">
            <p>Count:</p>
            <div className="flex mt-5">
              <div
                className="w-7 h-7 rounded-full bg-zinc-200 flex cursor-pointer"
                onClick={remove}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mx-auto my-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
              <div className="mx-6">{count}</div>
              <button
                className="w-7 h-7 rounded-full bg-zinc-200 flex cursor-pointer"
                onClick={add}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mx-auto my-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-8">
            <p>Color:</p>
            <div className="flex mt-5">
              <div
                className={`w-10 h-10 mr-3 rounded-full bg-fuchsia-400 ${
                  selectedColor === colors[0] ? "border-2 border-black" : ""
                }`}
                onClick={() => setSelectedColor(colors[0])}
              />
              <div
                className={`w-10 h-10 mr-3 rounded-full bg-sky-400 ${
                  selectedColor === colors[1] ? "border-2 border-black" : ""
                }`}
                onClick={() => setSelectedColor(colors[1])}
              />
              <div
                className={`w-10 h-10 mr-3 rounded-full bg-yellow-400 ${
                  selectedColor === colors[2] ? "border-2 border-black" : ""
                }`}
                onClick={() => setSelectedColor(colors[2])}
              />
              <div
                className={`w-10 h-10 rounded-full bg-green-400 ${
                  selectedColor === colors[3] ? "border-2 border-black" : ""
                }`}
                onClick={() => setSelectedColor(colors[3])}
              />
            </div>
          </div>
          <div className="mt-8 p-3 w-full bg-white fixed left-0 bottom-0 md:relative md:p-0">
            <div className="flex">
              <div className="w-10/12 mr-3 h-12 rounded bg-black cursor-pointer flex text-white">
                <span className="my-auto mx-auto"> Order Now</span>
              </div>
              <div className="w-2/12 border flex cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto my-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="flex justify-between border-b-2 border-b-zinc-100 pb-2">
              <p>Bouquet contents</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <div className="flex justify-between border-b-2 border-b-zinc-100 pb-2 mt-5">
              <p>Details</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <div className="flex justify-between border-b-2 border-b-zinc-100 pb-2 mt-5">
              <p>Delivery & Pay Policy</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-20 p-5 md:p-0">
        <Slider
          params={{
            title: "You may also like",
          }}
        />
      </div>
    </div>
  );
}
