"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const employee_router_1 = require("./employee.router");
const branch_1 = require("./branch");
exports.routes = (0, express_1.Router)();
exports.routes.use('/employees', employee_router_1.employeeRouter);
exports.routes.use('/branches', branch_1.branchRouter);
//# sourceMappingURL=router.js.map