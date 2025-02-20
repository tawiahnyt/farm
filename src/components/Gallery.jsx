/** @format */

import { activityImg } from "../constants";

const Gallery = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center mt-20 px-4 sm:px-6 lg:px-8">
      <div className="grid text-center gap-y-2 grid-cols-1 sm:gap-3 sm:gap-y-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-4 lg:gap-6">
        {activityImg.map((product) => (
          <div key={product} className="group relative block overflow-hidden">
            <img
              src={product}
              alt=""
              className="object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
