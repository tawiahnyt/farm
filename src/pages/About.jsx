/** @format */

import Hero2 from "../components/Hero2";
import BrokenLines from "../components/BrokenLines";
import OurValues from "../components/OurValues";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero2 text={"About Us"} img={"/about.jpg"} />

      {/* About Us */}
      <section className="bg-white mt-6 lg:mt-14">
        <div className="container px-6 py-5 mx-auto">
          <div className="justify-center text-center items-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
              About us
            </h1>

            <BrokenLines />
          </div>
          <div className="lg:flex lg:items-center">
            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="/about-img.webp"
                alt=""
              />
            </div>

            <div className="w-full space-y-12 lg:w-1/3 ">
              <div className="md:flex md:items-start md:-mx-4">
                <div className="mt-4 md:mx-4 md:mt-0">
                  <p className="mt-3 text-gray-500 text-lg">
                    XYZ Food Ltd. Is an international company operating in West
                    and Central Africa focusing on improving quality of life and
                    well-being through improvement in agriculture.
                  </p>
                  <p className="mt-6 text-gray-500 text-lg">
                    Provider of high-quality agricultural produce and spices, we
                    are dedicated to delivering fresh, organic, and sustainably
                    sourced products to meet the growing demands of our
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="lg:my-12 lg:mt-20 mt-10 border-gray-200 " />
        </div>
      </section>

      {/* Values */}
      <OurValues />

      {/* Mission */}
      <section className="bg-white mt-6 lg:mt-10">
        <div className="container px-6 py-5 mx-auto">
          <div className="justify-center text-center items-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
              our mission
            </h1>

            <BrokenLines />
          </div>

          <div className="w-full space-y-12 mt-8">
            <div className="md:flex md:text-center md:-mx-4 text-center items-center justify-center">
              <div className="mt-4 md:mx-4 md:mt-0">
                <p className="mt-3 text-lg text-gray-500">
                  We are dedicated to sustainably growing, harvesting, and
                  delivering high-quality organic produce and spices. Our goal
                  is to promote health and wellness while supporting
                  eco-friendly farming and empowering local farmers.
                </p>
              </div>
            </div>
          </div>
          <hr className="lg:my-12 lg:mt-20 mt-10 border-gray-200 " />
        </div>
      </section>

      {/* Vision */}
      <section className="bg-white mt-6 lg:mt-0 mb-20">
        <div className="container px-6 py-5 mx-auto">
          <div className="justify-center text-center items-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
              our vision
            </h1>

            <BrokenLines />
          </div>

          <div className="w-full space-y-12 mt-8">
            <div className="md:flex md:text-center md:-mx-4 text-center items-center justify-center">
              <div className="mt-4 md:mx-4 md:mt-0">
                <p className="mt-3 text-lg text-gray-500">
                  Our vision is to be a global leader in organic agriculture,
                  recognized for our commitment to sustainability, innovation,
                  and excellence in providing fresh, wholesome products that
                  nourish communities and protect the planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
