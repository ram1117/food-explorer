import Link from "next/link";
import { MealItemType } from "./types";
import ImageWrapper from "@/atoms/ImageWrapper";

interface MealItemProps {
  meal: MealItemType;
}

const MealItem = ({ meal }: MealItemProps) => {
  return (
    <article className="relative h-full shadow-md shadow-[rgba(0, 0, 0, 0.3)] bg-tile-gradient">
      <header>
        <ImageWrapper
          src={meal.image}
          alt="image of a prepared meal"
          imageSizes="h-60 w-full"
        />
        <div className="p-2">
          <h2 className="text-lg lg:text-xl font-semibold">{meal.title}</h2>
        </div>
      </header>
      <div className="p-2 mb-6">
        <p className="mb-6">{meal.summary}</p>
        <div className="absolute text-right text-xs lg:text-sm bottom-4 right-2">
          <Link className="link-style" href={`/meals/${meal.slug}`}>
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
