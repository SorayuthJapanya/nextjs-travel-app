import { FEATURES } from "@/constant";
import Image from "next/image";
import FeatureItem from "./FeatureItem";

const FeaturesSection = () => {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden bg-[url(/feature-bg.png)] bg-center bg-no-repeat pt-16 pb-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="relative flex flex-1 lg:min-h-180">
          <Image
            src={"/phone.png"}
            alt="phone"
            width={380}
            height={500}
            className="absolute  z-10 hidden max-w-375 rotate-15 md:-left-16 lg:flex 3xl:left-20"
          />
        </div>

        <div className="z-20 flex flex-col w-full lg:w-[60%]">
          <div className="relative">
            <Image src={"/camp.svg"} alt="camp" width={50} height={50}  className="absolute -left-2 -top-8 lg:-top-10 w-10 lg:w-12"/>
            <h1 className="text-4xl md:text-5xl font-semibold text-primary">
              Our Features
            </h1>
          </div>

          <ul className="mt-10 grid md:grid-cols-2 lg:mt-16 gap-10 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
