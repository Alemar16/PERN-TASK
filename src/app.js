import express from "express";
import morgan from "morgan";
import taksRoutes from "./routes/task.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API" });
});

app.use(taksRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  })
})

export default app