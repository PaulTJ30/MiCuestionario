import { Schema, model } from "mongoose";
import { IOption } from "../GlobalTypes";



const OptionSchema = new Schema<IOption>({
    questionID: {
        type: Schema.Types.ObjectId,
        ref: "questions",
        required: true
    },
    title: {
        type: String,
        required: true
    }

})
export const OptionModel = model("options", OptionSchema) 