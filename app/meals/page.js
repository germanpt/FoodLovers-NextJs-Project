import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals Created By{" "}
          <span className={classes.highlight}>Everyone</span>
        </h1>
        <p>Choose Your Fav Meal!</p>
        <p className={classes.cta}>
          <Link href="/meals/share"> Share Your Fav Meal</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={
            <p className={classes.loading}>Fetching Meals... Please Wait...</p>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
