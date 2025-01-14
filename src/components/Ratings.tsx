import { classNames } from '@/utils/helpers';
import { StarIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface RatingsProps {
  rating: number;
}

const Ratings: React.FC<RatingsProps> = ({ rating }) => {
  return (
    <>
      <p className="sr-only">{rating} out of 5 stars</p>
      <div className="flex items-center">
        {[0, 1, 2, 3, 4].map((rate) => (
          <StarIcon
            key={rate}
            aria-hidden="true"
            className={classNames(
              rating > rate ? 'text-yellow-400' : 'text-gray-200',
              'size-5 shrink-0',
            )}
          />
        ))}
      </div>
    </>
  );
};

export default Ratings;
