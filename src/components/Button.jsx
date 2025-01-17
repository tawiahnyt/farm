/** @format */

import PropTypes from "prop-types";

const Button = ({ className, text, href }) => {
  return (
    <div className="items-center justify-center py-12 text-center sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className={`inline-flex rounded-full border px-8 py-4 font-semibold leading-5 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 focus:ring-gray-500 ${
            className ||
            "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-gray-300 bg-white"
          }`}
        >
          <a href={href}>{text}</a>
        </button>
      </div>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
};

export default Button;
