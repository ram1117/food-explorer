import { MealItemType } from "./types";
import MealItem from "./MealItem";

interface MealsGridProps {
  meals: MealItemType[];
}

const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 auto-rows-fr my-8 lg:my-14">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
