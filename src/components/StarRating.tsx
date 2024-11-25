"use client";
import google from "../../public/images/google.png";
import upwork from "../../public/images/upwork.png";
import clutch from "../../public/images/unnamed.png";
import award from "../../public/images/unnamed (1).png";
import Image from "next/image";

const arr = [
  {
    icon: upwork,
    stars: "4.9",
    review: "1813 views",
    alt: "upwork",
  },
  {
    icon: google,
    stars: "4.8",
    review: "234 views",
    alt: "google",
  },
  {
    icon: google,
    stars: "4.8",
    review: "234 views",
    alt: "dssf",
  },
  {
    icon: google,
    stars: "4.8",
    review: "234 views",
    alt: "saewg",
  },
  {
    icon: google,
    stars: "4.8",
    review: "234 views",
    alt: "dwfre",
  },
];

let arr1 = [
  {
    icon: clutch,
    alt: "clutch",
  },
  {
    icon: clutch,
    alt: "clutch",
  },
  {
    icon: award,
    alt: "award",
  },
];

import React from "react";
import { AnimatedStarRating } from "@etzshally/reate";

const MyRatingComponent = () => {
  return (
    <div className="w-3/4 ml-20 space-y-10">
      <h1 className="text-red-500 font-bold text-xl">V. Plateform Verification (Clean row of logos)</h1>
      <div className="grid grid-cols-2 ">
        {arr.map((item, index) => (
          <div className="flex items-center gap-4 space-y-6" key={index}>
            <div>
              <Image src={item.icon} alt={item.alt} className="w-10" />
            </div>
            <div className="">
              <div className="flex items-center">
                <span>
                  <AnimatedStarRating ratingValue={4} />
                </span>
                <span className="pl-4">{item.stars}</span>
              </div>
              <div className="pl-2 -pb-4">{item.review}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        {arr1.map((item, index) => (
          <div key={index}>
            <Image src={item.icon} alt={item.alt} className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRatingComponent;
