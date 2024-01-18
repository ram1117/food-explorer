"use server";
import { redirect } from "next/navigation";
import { postMealData } from "./meals";
import z from "zod";
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const Meal = z.object({
  creator: z.string().min(5),
  creator_email: z.string().email(),
  title: z.string().min(4),
  summary: z.string().min(10),
  image: z
    .any()
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported.",
    ),
  instructions: z.string().min(30),
});

const validateInputs = (mealItem: any) => {
  return Meal.safeParse(mealItem);
};

export const postMeal = async (prevState: any, formData: any) => {
  const mealItem = {
    creator_email: formData.get("email"),
    creator: formData.get("name"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    image: formData.get("image"),
    instructions: formData.get("instructions"),
  };
  const validation = validateInputs(mealItem);
  if (validation.success) {
    await postMealData(mealItem);
    redirect("/meals");
  }
  if (validation.error) {
    return validation.error.errors;
  }
};
