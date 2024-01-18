import fs from "node:fs";
const sql = require("better-sqlite3");
import slugify from "slugify";
import xss from "xss";
import { MealDataType } from "@/components/meals/types";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare(`SELECT * from meals`).all();
};

export const getMeal = (slug: string) => {
  return db.prepare(`SELECT * FROM meals WHERE SLUG = ?`).get(slug);
};

export const postMealData = async (meal: MealDataType) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Could not save the image");
    }
  });
  meal.image = `/images/${filename}`;

  db.prepare(
    `
  INSERT INTO meals (title,summary,instructions, creator,creator_email,image,slug)
  VALUES (
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image,
    @slug
    )
  `,
  ).run(meal);
};
