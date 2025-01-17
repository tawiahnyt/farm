/** @format */

import { IoIosArrowDown } from "react-icons/io";
import BrokenLines from "../components/BrokenLines";
import FeatureProductCards from "../components/FeatureProductCards";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import HorizontalLine from "../components/HorizontalLine";
import { featureProducts, productsItem } from "../constants";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


const ProductandServices = () => {
  return (
    <>
      <Hero2 text={'Product and Services'} img={'/product-and-services.jpg'} />

      <section className="bg-white py-12 sm:py-16 lg:py-20 container mx-auto">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
              Our featured products
            </h1>

            <BrokenLines />
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
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

        <HorizontalLine />

        <div className="w-full space-y-12 mt-8 px-4">
          <div className="md:flex md:text-center md:-mx-4 text-center items-center justify-center">
            <div className="mt-4 md:mx-4 md:mt-0">
              <p className="mt-3 md:text-lg text-gray-500">
                XYZ Ltd. is focused on achieving sustainable growth while
                meeting the needs of our stakeholders. Our company revolves
                around producing high-quality agricultural products,
                contributing to community development, and promoting sustainable
                environmental practices. We pride ourselves on our ability to
                provide both local and international markets with superior
                products that support food security and economic development.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full space-y-12 mt-8 px-4">
          <div className="md:flex md:text-center md:-mx-4 text-center items-center justify-center">
            <div className="mt-4 md:mx-4 md:mt-0">
              <p className="mt-3 md:text-lg text-gray-500">
                We offer a wide range of products grown with care by local
                farmers, aimed at both local and export markets:
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="grid text-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-y-4 lg:gap-6">
          {productsItem.map((product) => (
            <ScrollLink
              key={product.id}
              to={product.id}
              smooth={true}
              duration={500}
              // onClick={() => {
              //   window.scrollTo({
              //     top: 1500,
              //     left: 0,
              //     behavior: "smooth",
              //   });
              // }}
              className=""
            >
              <div className="flex space-x-2">
                <IoIosArrowDown className="mt-2" />
                <p className="md:text-lg text-gray-500 font-semibold hover:text-gray-800">
                  {product.name}
                </p>
              </div>
            </ScrollLink>
          ))}
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center mt-20 px-4 sm:px-6 lg:px-8">
        <div className="grid text-center gap-y-2 grid-cols-1 sm:gap-3 sm:gap-y-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-4 lg:gap-6">
          {productsItem.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className="group relative block overflow-hidden"
            >
              <img
                src={product.img}
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {product.name}
                </h3>

                <p className="mt-1.5 text-sm text-gray-700">{product.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-white py-12 sm:py-16 lg:py-20 container mx-auto">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
              Our services
            </h1>

            <BrokenLines />
          </div>
        </div>

        <div className="w-full space-y-12 mt-8 px-4">
          <div className="md:flex md:text-center md:-mx-4 text-center items-center justify-center">
            <div className="mt-4 md:mx-4 md:mt-0">
              <p className="mt-3 md:text-lg text-gray-500">
                At XYZ Food Ltd, we pride ourselves on being your premier source
                of top-quality spices and vegetables. Our products are
                meticulously produced and crafted to bring the authentic state
                of African cuisine to your kitchen. Elevate your meals with the
                vibrant and unique flavors that only XYZ Food can offer.
                Experience the difference that quality makes. Your culinary
                journey to Africa begins here!!!
              </p>
            </div>
          </div>
        </div>

        <div className="w-full space-y-12 mt-8 px-4">
          <div className="md:flex md:text-center md:-mx-4 text-center items-center justify-center">
            <div className="mt-4 md:mx-4 md:mt-0">
              <p className="mt-3 md:text-lg text-gray-500">
                XYZ limited exports processed products within African countries,
                Europe and Americas, such as Plantain fufu, plantain chips from
                Plantains, Cassava flour, Attieke fresh and dehydrated, Gari,
                Placali from Cassava Passion fruit juice, passion fruit
                concentrate from Passion fruit
              </p>
            </div>
          </div>
        </div>

        <div className="w-full space-y-12 mt-8 px-4">
          <div className="md:flex md:text-center md:-mx-4 text-center items-center justify-center">
            <div className="mt-4 md:mx-4 md:mt-0">
              <p className="mt-3 md:text-lg text-gray-500 font-semibold italic">
                Taste the tradition, Trust the Quality Choose XYZ Food
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductandServices;
