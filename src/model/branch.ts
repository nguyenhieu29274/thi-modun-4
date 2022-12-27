import {model, Schema} from "mongoose";

export interface IBranch {
    name: string;
}
const branchSchema =  new Schema<IBranch>({
    name: String
})
const Branch = model<IBranch>('Branch',branchSchema);
export {Branch}