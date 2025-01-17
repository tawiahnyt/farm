/** @format */

import PropTypes from "prop-types";

const FeatureProductCards = ({ image, title, description }) => {
  return (
    <div className="group relative">
      <div className="aspect-w-1 aspect-h-1 overflow-hidden">
        <img
          className="h-64 w-128 object-cover transition-all mx-auto duration-300 group-hover:scale-125"
          src={image}
          onLoad={() => console.log("loaded")}
          alt=""
        />
      </div>
      <div className="mt-4 items-center text-center justify-center space-x-4">
        <div>
          <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
            {title}
          </h3>
          <div className="mt-2.5 flex items-center space-x-px"></div>
        </div>
        <p className="text-sm text-gray-500 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

FeatureProductCards.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default FeatureProductCards;
