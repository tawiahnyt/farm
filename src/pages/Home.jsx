/** @format */

import Hero from "../components/Hero";
import FeatureProductCards from "../components/FeatureProductCards";
import BrokenLines from "../components/BrokenLines";
import Button from "../components/Button";
import Footer from "../components/Footer";
import OurValues from "../components/OurValues";
import { featureProducts } from "../constants";

const Home = () => {
  return (
    <>
      <Hero href={"#values"} />

      <OurValues />

      <section className="bg-white py-12 sm:py-16 lg:py-20 container mx-auto">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
              Our featured products
            </h1>

            <BrokenLines />
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              faucibus massa dignissim tempus.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
            {featureProducts.map((product) => (
              <FeatureProductCards
                key={product.title}
                title={product.title}
                description={product.description}
                image={product.img}
              />
            ))}
          </div>
        </div>

        <Button
          className={
            "text-white bg-darkGreen border-normalGreen hover:bg-normalGreen px-8"
          }
          text={"Find out more"}
          href={"/products-and-services"}
        />
      </section>

      <Footer />
    </>
  );
};

export default Home;
