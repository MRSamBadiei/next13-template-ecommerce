"use client";

import { useEffect, useState } from "react";
import { getAllPlants } from "../../../lib/getPlant";
import Image from "next/image";
import Link from "next/link";

export default function ImageView() {
  const [plant, setPlant] = useState<
    {
      id: number;
      name: string;
      imgSrc: string;
      price: number;
    }[]
  >([]);

  useEffect(() => {
    getAllPlants().then((e) => {
      setPlant(e);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 my-10 md:grid-cols-4">
      {plant.map((el, i) => (
        <Link href={`/plants/${el.id}`} className="text-center" key={i}>
          <div className="bg-item rounded mb-5 md:mb-10">
            <Image
              className="w-52 h-52 mx-auto my-auto"
              src={`/images/${el.imgSrc}`}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="font-medium">{el.name}</div>
          <div className="text-xs font-medium">{el.price} $</div>
        </Link>
      ))}
    </div>
  );
}
