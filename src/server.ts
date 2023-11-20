import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import morgan from "morgan";

import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} from "./controllers/planets.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(morgan("dev"));

// GET ALL PLANETS
app.get("/api/planets", getAll);

// GET A SPECIFIC PLANET ID
app.get("/api/planets/:id", getOneById);

// CREATE A NEW PLANET
app.post("/api/planets", create);

// UPDATE A PLANET BY ID
app.put("/api/planets/:id", updateById);

// DELETE A PLANET BY ID
app.delete("/api/planets/:id", deleteById);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
