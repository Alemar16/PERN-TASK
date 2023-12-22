import pg from "pg";

export const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  user: "armando",
  password: "1623",
  database: "tasks_db",
});

pool.on("connect", () => {
  console.log("Database connected");
});
