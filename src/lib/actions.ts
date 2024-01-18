"use server";
import { redirect } from "next/navigation";
import { postMealData } from "./meals";

export const postMeal = async (formData: any) => {
  const mealItem = {
    creator_email: formData.get("email"),
    creator: formData.get("name"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    image: formData.get("image"),
    instructions: formData.get("instructions"),
  };
  await postMealData(mealItem);
  redirect("/meals");
};
