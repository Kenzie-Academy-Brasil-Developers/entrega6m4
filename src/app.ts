import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { sessionRouter, userRouter,categoryRouter } from "./routers";
import middlewares from "./middlewares";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/categories", categoryRouter);


app.use(middlewares.handleError);


export default app;
