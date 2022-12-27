"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModel = void 0;
const mongoose_1 = require("mongoose");
const employeeSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    salary: Number,
    branch: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Branch'
    }
});
const EmployeeModel = (0, mongoose_1.model)('EmployeeModel', employeeSchema);
exports.EmployeeModel = EmployeeModel;
//# sourceMappingURL=employee.model.js.map