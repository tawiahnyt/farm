/** @format */

import BrokenLines from "../components/BrokenLines";
import Footer from "../components/Footer";
import GreenDevelopmentFeatures from "../components/GreenDevelopmentFeatures";
import Hero2 from "../components/Hero2";
import HorizontalLine from "../components/HorizontalLine";
import WriteUp from "../components/WriteUp";
import { ourGoals } from "../constants";

const GreenDevelopment = () => {
  return (
    <>
      <Hero2 text={"Green Development"} img={"/green-development.jpeg"} />

      {/* Community Focus */}
      <section className="bg-white mt-6 lg:mt-14">
        <div className="container px-6 py-5 mx-auto">
          <div className="justify-center text-center items-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
              community focus
            </h1>

            <BrokenLines />
          </div>
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/3 ">
              <div className="md:flex md:items-start md:-mx-4">
                <div className="mt-4 md:mx-4 md:mt-0">
                  <p className="mt-3 text-gray-500 text-lg">
                    At XYZ Ltd., we believe in the transformative power of
                    education and community empowerment. Our focus is on
                    supporting and uplifting the most vulnerable groups,
                    particularly women in rural areas, who are often the
                    backbone of agricultural communities but lack the necessary
                    resources and opportunities. We provide training in
                    sustainable farming techniques, business development, and
                    financial literacy, ensuring that the community can thrive
                    independently.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="/plant.jpg"
                alt=""
              />
            </div>
          </div>

          {/* Horizontal Line */}
          <HorizontalLine />
        </div>
      </section>

      {/* Green Development Feature Section  */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
              our goals
            </h1>

            <BrokenLines />
            {/* <p className="font-pj mt-4 text-base leading-7 text-gray-600 sm:mt-8">
              Lorem ipsum dolor sit amet, consectetur adipis elit
            </p> */}
          </div>
          <div className="mt-10 grid grid-cols-1 gap-y-12 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            {ourGoals.map((goal) => (
              <GreenDevelopmentFeatures
                key={goal.title}
                title={goal.title}
                text={goal.description}
                icons={goal.icon()}
                styles={goal.style}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GreenDevelopment;
