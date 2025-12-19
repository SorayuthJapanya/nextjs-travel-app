import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const GetAppSection = () => {
  return (
    <section className="w-full flex items-center justify-center flex-col pb-24 padding-container">
      <div className="max-container relative flex w-full flex-col sm:flex-row justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat rounded-4xl px-6 py-12 text-white sm:gap-12 sm:py-24 lg:px-20 xl:max-h-150 xl:rounded-5xl">
        <div className="z-20 flex w-full flex-col flex-1 items-start justify-center gap-12">
          <h2 className="text-4xl sm:text-5xl font-bold xl:max-w-80">
            Get For Free Now!
          </h2>
          <p className="text-sm text-gray-50">
            Available on IOS and Android, download now!
          </p>

          <div className="w-full flex flex-col xl:flex-row gap-4 whitespace-nowrap">
            <Button className="p-6 rounded-full bg-white text-green-600 font-medium hover:bg-white/90 cursor-pointer">
              <Image src="/apple.svg" alt="apple" width={20} height={20} />
              Download App
            </Button>

            <Button className="p-6 rounded-full cursor-pointer border border-border">
              <Image src="/android.svg" alt="apple" width={20} height={20} />
              Download App
            </Button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetAppSection;
