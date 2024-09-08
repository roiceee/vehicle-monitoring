import { Request, Response } from "express";
import express from "express";
import "dotenv/config"
import guardRouter from "./routes/guard.js"
import adminRouter from "./routes/admin.js"
import morgan from "morgan";

const port = process.env.PORT;

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("common"))

//healthcheck
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({message: "Healthy"})
});

app.use("/guard", guardRouter);
app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log("Server is running on port", port);
});
