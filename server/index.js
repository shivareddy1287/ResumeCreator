import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/user.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/client/build/"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/client/build/index.html");
});

// app.use("/", (req, res) => {
//   res.send("welcome to azure project");
// });

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
