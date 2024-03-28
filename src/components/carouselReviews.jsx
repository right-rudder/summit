import { useEffect, useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const defaultReviews = [
  {
    id: 1,
    text: "Jami works the desk and she’s the nicest person I’ve ever met - super helpful.  My instructor, Hillary, has been nothing short of amazing to work with.  She has the perfect balance of patience and assertiveness to be a CFI.  They take great care of their planes here.  Come in and take a discovery flight - you won’t regret it.",
    author: "Kyle Hattock",
  },
];

export default function Carousel({ reviews = defaultReviews }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(reviews.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === reviews.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      if (current === reviews.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    }, 6300);

    return () => {
      clearInterval(slider);
    };
  }, [current]);

  return (
    <section id="reviews" class="w-full m-auto">
      <div className="overflow-hidden relative">
        <div
          className={`flex transition ease-out duration-500`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {reviews.map((r) => {
            return (
              <div className="bg-main-red flex items-center align-middle min-w-full px-0 py-24 lg:py-16 lg:px-8">
                <figure
                  className={`flex-auto mx-auto px-9 lg:px-36 ${current + 1 === r.id ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 ease-out`}
                >
                  <p className="sr-only">5 out of 5 stars</p>
                  <div class="flex justify-center align-middle gap-x-1 text-yellow-300">
                    <svg
                      class="h-5 w-5 flex-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      class="h-5 w-5 flex-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      class="h-5 w-5 flex-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      class="h-5 w-5 flex-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      class="h-5 w-5 flex-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <blockquote className="mt-10 p-0 text-xl text-center font-light leading-7 lg:leading-9 tracking-tight text-white sm:text-2xl sm:leading-9">
                    <p>{r.text}</p>
                  </blockquote>
                  <figcaption className="w-full p-0 mt-10 flex items-center justify-center gap-x-6">
                    <p className="text-3xl leading-6 italic text-center flex-1 font-bold text-gray-50">
                      {r.author}
                    </p>
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-end py-4 lg:items-center flex text-gray-900/45 px-10 text-5xl">
          <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>

        <div className="absolute bottom-3 lg:bottom-0 py-4 flex justify-center gap-3 w-full">
          {reviews.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-5 h-5 cursor-pointer  ${
                  i == current ? "bg-black/60" : "bg-black/10"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
