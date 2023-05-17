import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Project } from "../lib/Projects";
import Link from "next/link";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";

const Content = () => {
  const router = useRouter();
  const { name } = router.query;
  const [data, setData] = useState({});

  useEffect(() => {
    Project.forEach((pro) => {
      if (pro.route === name) {
        setData(pro);
      }
    });
  }, [name]);

  if (data === {}) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10" />
        {data.bacImg && (
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={data.bacImg}
            alt="/"
          />
        )}
        <div className="absolute top-3/4 max-w-7xl px-5 w-full left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 p-2">
          <h2 className="py-2 capitalize">{data.title}</h2>
          <h3>{data.subTitle}</h3>
        </div>
      </div>

      <div className="grid md:grid-cols-6 items-start mx-auto max-w-7xl px-5 py-2 gap-8 pt-8">
        <div className="col-span-4">
          <p className="italic">Project</p>
          <h2 className="mb-2">Overview</h2>
          {data.description &&
            data.description.map((des, i) => (
              <p key={i} className="py-1">
                {des}
              </p>
            ))}
          {data.demo && (
            <Link href={data.demo}>
              <a target="_blank">
                <button className="px-8 py-2 mt-4 mr-8">Demo</button>
              </a>
            </Link>
          )}
          {data.code && (
            <Link href={data.code}>
              <a target="_blank">
                <button className="px-8 py-2 mt-4">code</button>
              </a>
            </Link>
          )}
        </div>

        <div className="col-span-4 md:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 mb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-y-2">
              {data.skills &&
                data.skills.map((skill, j) => (
                  <p
                    key={j}
                    className="text-gray-600 flex items-center whitespace-nowrap capitalize">
                    <RiRadioButtonFill className="pr-1" />
                    {skill}
                  </p>
                ))}
            </div>
          </div>
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Content;
