import { MealItemType } from './types';
import MealItem from './MealItem';

interface MealsGridProps {
  meals: MealItemType[];
}

const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
