/** @format */

import BrokenLines from "./BrokenLines";
import PropTypes from "prop-types";

const WriteUp = ({ title, text }) => {
  return (
    <section className="bg-white mt-6 lg:mt-10">
      <div className="container px-6 py-5 mx-auto">
        <div className="justify-center text-center items-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            {title}
          </h1>

          <BrokenLines />
        </div>

        <div className="w-full space-y-12 mt-8">
          <div className="md:flex md:text-center md:-mx-4 text-center items-center justify-center">
            <div className="mt-4 md:mx-4 md:mt-0">
              <p className="mt-3 text-lg text-gray-500">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WriteUp.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
};

export default WriteUp;
