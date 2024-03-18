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
    <div className="overflow-hidden w-full bg-gradient-to-br from-white to-gray-200 py-10">
      <h2 className="text-3xl lg:text-4xl font-bold text-center pt-5 px-5">
        What Our Students Say
      </h2>
      <div className="flex py-10 gap-5" ref={reviewContainerRef}>
        {duplicatedReviews.map((review, index) => (
          <div
            key={`${review.id}-${index}`}
            className="flex flex-col gap-2 justify-center min-w-64 p-4 text-center rounded-xl shadow-lg shadow-gray-500 text-black bg-gradient-to-bl from-gray-200 to-gray-300"
          >
            <p className="text-gray-600">{review.text}</p>
            <p className="font-medium">{review.author}</p>
            <div className="flex justify-center">
              <IoIosStar className="text-yellow-600 text-xl" />
              <IoIosStar className="text-yellow-600 text-xl" />
              <IoIosStar className="text-yellow-600 text-xl" />
              <IoIosStar className="text-yellow-600 text-xl" />
              <IoIosStar className="text-yellow-600 text-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
