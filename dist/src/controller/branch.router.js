"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const branch_1 = require("../model/branch");
class BranchController {
    constructor() {
        this.getAll = async (req, res) => {
            let branches = await branch_1.Branch.find();
            res.status(200).json(branches);
        };
        this.addBranch = async (req, res) => {
            let branch = req.body;
            branch = await branch_1.Branch.create(branch);
            res.status(201).json(branch);
        };
        this.deleteBranch = async (req, res) => {
            let id = req.params.id;
            let branch = await branch_1.Branch.findById(id);
            if (!branch) {
                res.status(404).json();
            }
            else {
                branch.delete();
                res.status(204).json();
            }
        };
        this.getBranch = async (req, res) => {
            let id = req.params.id;
            let branch = await branch_1.Branch.findById(id);
            if (!branch) {
                res.status(404).json();
            }
            else {
                res.status(200).json(branch);
            }
        };
        this.updateBranch = async (req, res) => {
            let id = req.params.id;
            let branch = await branch_1.Branch.findById(id);
            if (!branch) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                await branch_1.Branch.findOneAndUpdate({
                    _id: id
                }, data);
                data._id = id;
                res.status(200).json(data);
            }
        };
    }
}
exports.default = new BranchController();
//# sourceMappingURL=branch.router.js.map