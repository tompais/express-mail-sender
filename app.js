import express, { json, urlencoded } from "express";
import logger from "morgan";

import mailRouter from "./routes/mail.js";

var app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/mail", mailRouter);

export default app;
