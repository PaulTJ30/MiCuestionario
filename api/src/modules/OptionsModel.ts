import { Schema, model } from "mongoose";

interface IOption {
    questionID: Schema.Types.ObjectId | string
    title: string;

}

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