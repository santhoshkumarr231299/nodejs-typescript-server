import express, { Application } from 'express';
import dotenv from 'dotenv';
const mainRouter = require("./routes/index.ts");

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

//router config
app.use("/", mainRouter);

//server config
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});