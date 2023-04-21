"use client";
interface Looper {
  name: string;
  price: number;
  imgSrc: string;
  id: string;
}
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Right = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

const Left = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
      />
    </svg>
  );
};

const Looper: React.FC<Looper> = ({ name, price, imgSrc, id }) => {
  return (
    <Link href={`plants/${id}`}>
      <li className="text-center w-48 h-48 flex-shrink-0 snap-start touch-pan-x">
        <div className="bg-item rounded-sm">
          <Image
            src={`/images/${imgSrc}`}
            className="w-96 h-40 object-scale-down"
            width={384}
            height={160}
            alt={""}
          />
        </div>

        <div className="mt-4">{name}</div>
        <div className="text-sm font-light">price - {price}</div>
      </li>
    </Link>
  );
};

export default function Slider({ params }: { params: { title: string } }) {
  const ref = useRef<HTMLUListElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [plant, setPlant] = useState<
    {
      id: number;
      name: string;
      imgSrc: string;
      price: number;
    }[]
  >([]);

  useEffect(() => {
    const data = fetch(`/api/data/`, {
      method: "GET",
    })
      .then((e) => e.json())
      .then((data) => {
        setPlant(data);
      });
  }, []);

  useEffect(() => {
    const el = ref.current as any;
    el.scrollLeft = scrollX;
  }, [scrollX]);

  return (
    <div>
      <div className="mt-10 mb-5 flex">
        <div className="text-xl">{params.title}</div>
        <div className="flex gap-3 my-auto ml-auto">
          <div
            className="cursor-pointer"
            onClick={() =>
              setScrollX((last) =>
                last > 0
                  ? (last -=
                      (ref.current?.scrollWidth as number) / plant.length)
                  : 0
              )
            }
          >
            <Left />
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              setScrollX((last) =>
                last <
                (plant.length - 3) *
                  ((ref.current?.scrollWidth as number) / plant.length)
                  ? (last +=
                      (ref.current?.scrollWidth as number) / plant.length)
                  : (plant.length - 3) *
                    ((ref.current?.scrollWidth as number) / plant.length)
              )
            }
          >
            <Right />
          </div>
        </div>
      </div>
      <ul
        className="flex pb-20 overflow-x-scroll hideScroll scroll-smooth gap-5 snap-x"
        ref={ref}
      >
        {plant.map((el, index) => (
          <Looper
            id={el.id.toString()}
            imgSrc={el.imgSrc}
            name={el.name}
            price={el.price}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}
