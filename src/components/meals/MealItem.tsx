import Link from 'next/link';
import { MealItemType } from './types';
import ImageWrapper from '@/atoms/ImageWrapper';

interface MealItemProps {
  meal: MealItemType;
}

const MealItem = ({ meal }: MealItemProps) => {
  return (
    <article className="flex flex-col justify-between rounded-md shadow-md shadow-slate-500 bg-tile-gradient">
      <header>
        <ImageWrapper
          src={meal.image}
          alt="image of a prepared meal"
          imageSizes="h-32 w-32 lg:h-48 lg:w-48"
        />
        <div>
          <h2>{meal.title}</h2>
          <h6>{meal.creator}</h6>
        </div>
      </header>
      <div>
        <p>{meal.summary}</p>
        <div>
          <Link href={`/meals/${meal.slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
