import Link from 'next/link';
import MealsGrid from '@/components/meals/MealsGrid';

const MealsPage = () => (
  <>
    <header className="">
      <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8">
        Delicious Recipes shared{' '}
        <span className="gradient-text-primary">by You</span>
      </h1>
      <h6 className="text-base lg:text-lg my-2">
        Choose your favourite recipe from the diverse list. It is easy and
        healthy. Enjoy your meal.
      </h6>

      <Link
        className="text-sm lg:text-base lg:min-w-40 link-style"
        href="/meals/share"
      >
        Share your favourite Recipe
      </Link>
    </header>
    <main className="">
      <MealsGrid meals={[]} />
    </main>
  </>
);

export default MealsPage;
