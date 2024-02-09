import 'express-async-errors';
import 'reflect-metadata';
import middlewares from "./middlewares"
import express, { Application } from 'express';
import { userRouter, sessionRouter, categoryRouter, realEstateRouter } from './routers';
import { scheduleRouter } from './routers/schedules.routers';

const app: Application = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/schedules", scheduleRouter);
app.use("/realEstate", realEstateRouter);
app.use("/categories", categoryRouter);

app.use(middlewares.handleError);

export default app;