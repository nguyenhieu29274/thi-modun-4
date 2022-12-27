import { Request, Response } from "express";
declare class EmployeeController {
    getAll: (req: Request, res: Response) => Promise<void>;
    showAddPage(req: any, res: any): Promise<void>;
    addEmployee: (req: Request, res: Response) => Promise<void>;
    deleteEmployee: (req: Request, res: Response) => Promise<void>;
    getEmployee: (req: Request, res: Response) => Promise<void>;
    updateEmployee: (req: Request, res: Response) => Promise<void>;
}
declare const _default: EmployeeController;
export default _default;
