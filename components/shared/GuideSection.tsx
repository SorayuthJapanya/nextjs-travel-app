import Image from "next/image";
import React from "react";

const GuideSection = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-16 pb-24">
      <div className="max-container padding-container w-full pb-16">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase text-base text-green-500 -mt-1 mb-3 ">
          we are here for you
        </p>

        <div className="flex flex-wrap justify-between gap-3 lg:gap-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary xl:max-w-96">
            Guide You of Easy Path
          </h2>
          <p className="text-primary/60 xl:max-w-120">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi
            corrupti suscipit tempore deserunt, esse porro assumenda a illo?
            Voluptatum, magnam inventore et tempore maxime rerum delectus illum
            modi officiis?
          </p>
        </div>
      </div>

      <div className="relative w-full flex flex-center justify-center max-container max-sm:px-none padding-container">
        <Image
          src={"/boat.png"}
          alt="boat"
          width={1280}
          height={580}
          className="w-full object-center object-contain rounded-xl sm:rounded-4xl"
        />

        <div className="absolute flex bg-card py-4 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[15%] -top-[16%] sm:top-[15%]">
          <Image src="/meter.svg" alt="meter" width={16} height={500} />
          <div className="flex flex-col items-center justify-center">
            <div className="flex w-full flex-col">
              <div className="w-full flex items-center justify-between">
                <p className="text-sm text-primary/40">Destination</p>
                <p className="text-sm font-bold text-green-600">48 min</p>
              </div>
              <p className="text-primary text-base font-bold">
                Aguas Calientes
              </p>
            </div>

            <div className="flex w-full flex-col mt-24">
              <p className="text-sm text-primary/40">Start Track</p>
              <p className="text-primary text-base font-bold">
                Aguas Calientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
