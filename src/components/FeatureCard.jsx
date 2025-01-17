/** @format */

import PropTypes from "prop-types";

const FeatureCard = ({ icon, title, subtitle }) => {
  return (
    <div className="space-y-3">
      <span className="inline-block p-4 text-normalGreen text-center text-2xl bg-green-100 rounded-xl">
        {icon}
      </span>

      <h1 className="text-2xl font-semibold text-gray-700 capitalize">
        {title}
      </h1>

      <p className="text-gray-500 text-lg">{subtitle}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.node,
};

export default FeatureCard;
