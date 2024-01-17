const sql = require("better-sqlite3");
const db = sql("meals.db");

export const getMeals = () => db.prepare(`SELECT * from meals`).all();
