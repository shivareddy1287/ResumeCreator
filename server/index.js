import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/user.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/", (req, res) => {
  res.send("welcome to azure");
});
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
