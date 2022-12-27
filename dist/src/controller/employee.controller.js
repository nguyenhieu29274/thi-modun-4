"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_model_1 = require("../model/employee.model");
class EmployeeController {
    constructor() {
        this.getAll = async (req, res) => {
            let employee = await employee_model_1.EmployeeModel.find().populate('branch', 'name');
            res.status(200).json(employee);
        };
        this.addEmployee = async (req, res) => {
            let employee = req.body;
            employee = await employee_model_1.EmployeeModel.create(employee);
            let newEmployee = await employee_model_1.EmployeeModel.findById(employee._id).populate('branch', 'name');
            res.status(201).json(newEmployee);
        };
        this.deleteEmployee = async (req, res) => {
            let id = req.params.id;
            let employee = await employee_model_1.EmployeeModel.findById(id);
            if (!employee) {
                res.status(404).json();
            }
            else {
                employee.delete();
                res.status(204).json();
            }
        };
        this.getEmployee = async (req, res) => {
            let id = req.params.id;
            let employee = await employee_model_1.EmployeeModel.findById(id).populate('branch', 'name');
            if (!employee) {
                res.status(404).json();
            }
            else {
                res.status(200).json(employee);
            }
        };
        this.updateEmployee = async (req, res) => {
            let id = req.params.id;
            let employee = await employee_model_1.EmployeeModel.findById(id);
            if (!employee) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                await employee_model_1.EmployeeModel.findOneAndUpdate({
                    _id: id
                }, data);
                data._id = id;
                employee = await employee_model_1.EmployeeModel.findById(id).populate('branch', 'name');
                res.status(200).json(employee);
            }
        };
    }
    async showAddPage(req, res) {
        let branch = await Branch.find();
        res.render('employees/addEmployee', { data: branch });
    }
}
exports.default = new EmployeeController();
//# sourceMappingURL=employee.controller.js.map