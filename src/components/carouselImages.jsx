import { useEffect, useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carouselimages({ images }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      if (current === images.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    }, 3000);

    return () => {
      clearInterval(slider);
    };
  }, [current]);

  return (
    <>
      {images && (
        <div id="images" class="w-full m-auto">
          <div className="overflow-hidden relative">
            <div
              className={`flex transition ease-out duration-500`}
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {images.map((r) => {
                return (
                  <div
                    key={r.src}
                    className="flex items-center align-middle min-w-full p-4"
                  >
                    <img
                      className="object-cover w-full aspect-[4/3] lg:aspect-video"
                      src={r.src}
                      alt={r.alt}
                    />
                  </div>
                );
              })}
            </div>
            <div className="absolute bottom-3 lg:bottom-2 py-4 flex justify-center gap-3 w-full">
              {images.map((s, i) => {
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
        </div>
      )}
    </>
  );
}
