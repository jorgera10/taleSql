import express from "express";
import cors from "cors";
import taleRoutes from "./routes/routes.js";
import db from "./database/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/tale", taleRoutes);

try {
  await db.authenticate();
  console.log("Connection successful");
} catch (error) {
  console.log(`Connection error: ${error}`);
}

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.listen(8000, () => {
  console.log("server running in 8000");
});
