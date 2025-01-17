/** @format */
import PropTypes from "prop-types";

const Hero2 = ({ text, img }) => {
  return (
    <header
      style={{ backgroundImage: `url(${img})` }}
      className="bg-cover bg-center bg-no-repeat h-[50vh] flex items-center justify-center"
    >
      <div className="px-6 py-16 mx-auto">
        <div className="w-full">
          <div className="">
            <h1 className="mt-4 text-4xl font-bold font-serif text-white lg:my-20 sm:text-6xl text-center">
              {text}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

Hero2.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
};

export default Hero2;
