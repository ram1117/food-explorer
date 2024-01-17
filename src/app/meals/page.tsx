import Link from "next/link";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorUi from "./error";

const GridWrapper = async () => {
  const meals = await getMeals();
  return (
    <main className="">
      <MealsGrid meals={meals} />
    </main>
  );
};

const MealsPage = () => {
  return (
    <>
      <header>
        <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8">
          Delicious Recipes shared{" "}
          <span className="gradient-text-primary">by You</span>
        </h1>
        <h6 className="text-base lg:text-lg my-2">
          Choose your favourite recipe from the diverse list. It is easy and
          healthy. Enjoy your meal.
        </h6>
        <p className="my-4">
          <Link
            className="text-sm lg:text-base lg:min-w-40 link-style"
            href="/meals/share"
          >
            Share your favourite Recipe
          </Link>
        </p>
      </header>
      <></>
      <Suspense
        fallback={
          <h2 className="text-2xl font-semibold text-center">
            Fetching Recipes...
          </h2>
        }
      >
        <ErrorBoundary fallback={<ErrorUi />}>
          <GridWrapper />
        </ErrorBoundary>
      </Suspense>
    </>
  );
};

export default MealsPage;
