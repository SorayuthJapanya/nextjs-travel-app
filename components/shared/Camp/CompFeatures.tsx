/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import React from "react";

const CompFeatures = () => {
  const features = [
    {
      src: "https://blog.whiteduckoutdoors.com/wp-content/uploads/2022/10/10-websites-to-help-you-find-the-perfect-campsite.jpg",
      alt: "camp1",
      title: "Campoling",
      href: "/",
    },
    {
      src: "https://theexpertcamper.co.uk/wp-content/uploads/2024/06/how-to-make-your-camping-trip-more-comfortable-ZF.jpeg",
      alt: "camp-2",
      title: "Eyamagahana",
      href: "/",
    },
  ];

  return (
    <>
      {features.map((feature, index) => {
        const Info = (
          <div className="w-full flex flex-col gap-3 sm:gap-4 items-center sm:items-start">
            <h1 className="text-4xl md:text-5xl font-semibold text-primary">
              {feature.title}
            </h1>
            <p className="text-base text-primary/60 text-center sm:text-start max-w-120">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              accusamus obcaecati, voluptate, expedita molestiae doloribus
              praesentium iure quisquam deleniti, atque sunt voluptatum ipsam
              libero facilis.
            </p>
            <Button className="w-24 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer px-8 py-5">
              See more
            </Button>
          </div>
        );
        return (
          <div
            key={index}
            className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 items-center"
          >
            <div
              className={`w-full flex flex-col gap-4 items-center sm:items-start
                ${index % 2 === 0 ? "order-2 sm:order-1" : "order-1 sm:order-2"}`}
            >
              {Info}
            </div>

            <img
              src={feature.src}
              alt={feature.alt}
              className={`w-full h-auto rounded-lg
                ${index % 2 === 0 ? "sm:order-2" : "sm:order-1"}`}
            />
          </div>
        );
      })}
    </>
  );
};

export default CompFeatures;
