/** @format */

import { ourValues } from "../constants";
import FeatureCard from "./FeatureCard";
import BrokenLines from "./BrokenLines";

const OurValues = () => {
  return (
    <section className="bg-white mt-2" id="values">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-lg font-semibold text-gray-800 capitalize lg:text-lg">
          Why choose us?
        </h1>

        <BrokenLines />
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
          Our Values
        </h1>

        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
          <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
            {ourValues.map((value) => (
              <FeatureCard
                key={value.title}
                title={value.title}
                subtitle={value.description}
                icon={value.icon()}
              />
            ))}
          </div>

          <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
            <img
              className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/042/229/701/non_2x/ai-generated-assorted-colorful-vegetables-and-fruits-on-display-free-photo.jpeg"
              alt=""
            />
          </div>
        </div>
        <hr className="lg:mt-20 mt-10 border-gray-200 " />
      </div>
    </section>
  );
};

export default OurValues;
