import { Request, Response } from "express";
declare class BranchController {
    getAll: (req: Request, res: Response) => Promise<void>;
    addBranch: (req: Request, res: Response) => Promise<void>;
    deleteBranch: (req: Request, res: Response) => Promise<void>;
    getBranch: (req: Request, res: Response) => Promise<void>;
    updateBranch: (req: Request, res: Response) => Promise<void>;
}
declare const _default: BranchController;
export default _default;
