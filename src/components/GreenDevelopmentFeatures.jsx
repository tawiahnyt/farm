/** @format */

import PropTypes from "prop-types";

const GreenDevelopmentFeatures = ({ title, text, icons, styles }) => {
  return (
    <div className={`md:p-8 lg:p-14 ${styles}`}>
      <h2 className="text-darkGreen flex text-5xl justify-center">{icons}</h2>

      <h3 className="font-pj mt-12 text-xl font-bold text-gray-900">{title}</h3>
      <p className="font-pj mt-5 text-lg text-gray-600">{text}</p>
    </div>
  );
};

GreenDevelopmentFeatures.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icons: PropTypes.node,
  styles: PropTypes.string,
};

export default GreenDevelopmentFeatures;
