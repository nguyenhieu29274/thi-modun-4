import { Request, Response} from "express";
import {EmployeeModel} from "../model/employee.model";
import {Branch} from "../model/branch";


class EmployeeController {
    showAddPage = async  (req:Request, res: Response )=> {
        let branch = await Branch.find();
        res.render('employee /addEmployee', {data: branch});
    }


    getAll = async (req: Request, res: Response) => {
        let employee = await EmployeeModel.find().populate('branch', 'name');
        res.status(200).json(employee);
    }

    addEmployee = async (req: Request, res: Response) => {

        let employee = req.body;
        employee = await EmployeeModel.create(employee);
        let newEmployee = await EmployeeModel.findById(employee._id).populate('branch', 'name');
        res.status(201).json(newEmployee);

    }

    deleteEmployee = async (req: Request, res: Response) => {
        let id = req.params.id;

        let employee = await EmployeeModel.findById(id);
        if (!employee) {
            res.status(404).json();
        } else {
            employee.delete();
            res.status(204).json();
        }

    }

    getEmployee = async (req: Request, res: Response) => {
        let id = req.params.id;

        let employee = await EmployeeModel.findById(id).populate('branch', 'name');
        if (!employee) {
            res.status(404).json();
        } else {
            res.status(200).json(employee);
        }

    }

    updateEmployee = async (req: Request, res: Response) => {
        let id = req.params.id;
        let employee = await EmployeeModel.findById(id);
        if (!employee) {
            res.status(404).json();
        } else {
            let data = req.body;
            await EmployeeModel.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            employee = await EmployeeModel.findById(id).populate('branch','name');
            res.status(200).json(employee);
        }
    }
}

export default new EmployeeController()