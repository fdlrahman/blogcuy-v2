import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Author from "./_child/author";
import Link from "next/link";
import Image from "next/image";
import { responsive } from "../helpers/utility";
import fetcher from "../lib/fetcher";
import Spinner from "../components/_child/spinner";
import Error from "../components/_child/error";

function section3() {
  const [windowSize, setWindowSize] = useState([]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const { data, isLoading, isError } = fetcher("popular");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section className="py-16">
      <div className="container px-3 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 pb-10 text-center">Most Popular</h1>

        {/* swiper */}
        <div>
          <Swiper
            spaceBetween={0}
            slidesPerView={windowSize[0] > responsive.md ? 2 : 1}
            autoplay={{ delay: 5000 }}
          >
            {data.map((value, index) => (
              <SwiperSlide>
                <Post data={value} key={index}></Post>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  return (
    <div className="my-2">
      <div className="image my-3 mb-7">
        <Image src={data.img} width="450" height="200" />
      </div>
      <div className="info sm:w-4/5 md:w-11/12">
        <div className="cat text-sm">
          <Link href={"/"} className="text-sky-600">
            {data.category}
          </Link>
          <Link href={"/"} className="text-gray-800">
            - {data.published}
          </Link>
        </div>
        <div className="title">
          <Link href={"/"} className="font-bold text-3xl hover:text-gray-700">
            {data.title}
          </Link>
        </div>
        <p className="text-sm py-2">{data.subtitle}</p>

        {data.author ? <Author data={data.author}></Author> : <></>}
      </div>
    </div>
  );
}

export default section3;
