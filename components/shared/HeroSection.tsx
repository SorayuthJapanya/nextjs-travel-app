"use client";
import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full max-container padding-container flex flex-col md:flex-row gap-8 md:gap-28 py-10 lg:py-24 lg:pb-30">
      <div className="absolute right-0 top-0 h-screen w-screen bg-patten-2 bg-cover bg-center xl:-top-12" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* Header */}
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute -left-1.5 lg:-left-4 -top-9 lg:-top-12 w-9 lg:w-12.5"
        />
        <h1 className="font-bold text-[40px] max-sm:leading-11 xl:text-6xl sm:max-w-lg">
          Euro Sorayuth Camping Area
        </h1>
        <p className="text-gray-400 text-base font-normal mt-6 max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem
          voluptatem vitae officia distinctio excepturi non saepe voluptas,
          fugiat, ab commodi possimus dolore natus maiores.
        </p>

        {/* Star */}
        <div className="my-10 flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  alt="start"
                  key={index}
                  width={20}
                  height={20}
                />
              ))}

            <p className="text-sm font-semibold text-gray-700">
              192k
              <span className="font-medium text-gray-500">
                {" "}
                Exllent Reviews
              </span>
            </p>
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-3 mt-3 max-sm:px-4">
            <Button className="bg-green-500 hover:bg-green-600 cursor-pointer p-6 rounded-full font-semibold">
              Download App
            </Button>
            <Button className="text-black bg-transparent hover:bg-gray-100 p-6 rounded-full cursor-pointer font-semibold">
              <Image src="/play.svg" alt="play" width={20} height={20} />
              <span className="ml-2">How we work?</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-68 flex flex-col gap-6 rounded-3xl bg-black/90 px-6 py-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-base font-normal text-gray-400">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="text-xl text-white font-bold">Aguas Calientes</p>
          </div>

          <div className="flex items-center justify-between">
            {/* Distace */}
            <div className="flex flex-col">
              <p className="text-base font-normal text-gray-400">Distance</p>
              <p className="text-xl text-white font-bold">173.28 mi</p>
            </div>

            <div className="flex flex-col">
              <p className="text-base font-normal text-gray-400">Elavation</p>
              <p className="text-xl text-white font-bold">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
