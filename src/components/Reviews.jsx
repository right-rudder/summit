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
    <div className="overflow-hidden w-full bg-main-red py-16">
      <div className="flex py-16 gap-5" ref={reviewContainerRef}>
        {duplicatedReviews.map((review, index) => (
          <div
            key={`${review.id}-${index}`}
            className="flex flex-col gap-2 justify-center min-w-96 p-4 text-center rounded text-black bg-gradient-to-bl from-gray-200 to-gray-300"
          >
            <p className="text-gray-700">{review.text}</p>
            <p className="font-bold">{review.author}</p>
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
