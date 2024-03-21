import { useRef, useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import { reviews } from "../data/reviews";

const Reviews = () => {
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  const reviewContainerRef = useRef(null);

  useEffect(() => {
    const reviewWidth = reviewContainerRef.current.firstChild.offsetWidth;
    const gapWidth = 20;
    const animation = reviewContainerRef.current.animate(
      [
        { transform: `translateX(0)` },
        {
          transform: `translateX(-${(reviewWidth + gapWidth) * reviews.length}px)`,
        },
      ],
      {
        duration: 60000,
        iterations: Infinity,
        easing: "linear",
      },
    );

    return () => animation.cancel();
  }, []);

  return (
    <div className="overflow-hidden w-full bg-main-red py-12 sm:py-24">
      <h2 class="xl:text-5xl text-4xl font-bold tracking-tight text-white text-center">Praise for Summit Flight Academy</h2>
      <p class="mt-2 text-xl leading-8 text-gray-100 text-center">Words from our valued students</p>
      <div className="flex py-12 gap-5" ref={reviewContainerRef}>
        {duplicatedReviews.map((review, index) => (
          <div
            key={`${review.id}-${index}`}
            className="flex flex-col gap-2 justify-center min-w-96 py-6 px-8 text-center text-black bg-gray-100"
          >
            <div className="flex justify-center items-center">
              <IoIosStar className="text-yellow-600 text-lg" />
              <IoIosStar className="text-yellow-600 text-lg" />
              <IoIosStar className="text-yellow-600 text-lg" />
              <IoIosStar className="text-yellow-600 text-lg" />
              <IoIosStar className="text-yellow-600 text-lg" />
            </div>
            <p className="text-gray-800 text-base text-justify text-l px-5">{review.text}</p>
            <p className="font-bold text-xl text-gray-600">{review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
