import {Router} from "express";
import {employeeRouter} from "./employee.router";
import {branchRouter} from "./branch";

export const routes = Router();
routes.use('/employees',employeeRouter);
routes.use('/branches',branchRouter);