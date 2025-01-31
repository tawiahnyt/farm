/** @format */

import { FiArrowRightCircle } from "react-icons/fi";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Hero = ({ href }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image
    const preloadImg = new Image();
    preloadImg.src = "/hero-img.webp";
    preloadImg.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="relative py-48 sm:py-16 lg:py-24 lg:h-[95vh] h-[100vh]">
      {/* Image section */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero-img.webp"
          loading="lazy"
          alt="Hero-Image"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)} // Mark as loaded when image is loaded
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 px-4 mx-auto max-w-7xl mt-20 lg:mt-0 sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mt-2 text-4xl font-bold font-serif text-black lg:mt-32 lg:mb-20 sm:text-5xl xl:text-7xl">
              NEXT STOP WEST AFRICA
            </h1>
            <p className="mt-8 text-base text-gray-600 lg:mt-2 sm:text-xl">
              Next Stop West Africa Is an international company operating in
              West and Central Africa focusing on improving quality of life and
              well-being through improvement in agriculture.
            </p>

            <button
              href={href}
              title=""
              onClick={() => {
                window.scrollTo({
                  top: 900,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              className="inline-flex items-center px-8 py-4 mt-5 font-semibold transition-all duration-200 bg-darkGreen rounded-full lg:mt-8 hover:bg-normalGreen focus:bg-normalGreen text-white"
            >
              Find out more
              <FiArrowRightCircle className="text-xl ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  href: PropTypes.string,
};

export default Hero;
