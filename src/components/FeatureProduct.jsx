/** @format */

// TODO: ADD THE REMAINING COMPONENTS TO IT AND ADD CONDITIONS TO IT SO YOU CAN EXPORT IT

import BrokenLines from "./BrokenLines";
import { featureProducts } from "../constants";
import FeatureProductCards from "./FeatureProductCards";

const FeatureProduct = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 container mx-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            Our featured products
          </h1>

          <BrokenLines />
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
    </section>
  );
};

export default FeatureProduct;
