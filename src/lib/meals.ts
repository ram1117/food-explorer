const sql = require("better-sqlite3");
const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare(`SELECT * from meals`).all();
};

export const getMeal = (slug: string) => {
  return db.prepare(`SELECT * FROM meals WHERE SLUG = ?`).get(slug);
};
