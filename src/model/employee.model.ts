import {model, Schema} from "mongoose";
import {IBranch} from "./branch"

interface IEmployee {
    name?: string,
    age?: number,
    salary?: number,
    branch?: IBranch
}
const employeeSchema = new Schema<IEmployee>({
    name: String,
    age: Number,
    salary: Number,
    branch: {
        type: Schema.Types.ObjectId,
        ref: 'Branch'
    }
})
const EmployeeModel = model<IEmployee>('EmployeeModel', employeeSchema)
export {EmployeeModel}