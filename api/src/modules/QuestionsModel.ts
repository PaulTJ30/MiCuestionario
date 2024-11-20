import { Schema, model } from "mongoose";

interface IQuestion {
    title: string,
    type: "radio" | "checkbox" | "select" | "text",
    isMandatory: boolean,
    questionnaireID: Schema.Types.ObjectId | string
}


const QuestionSchema = new Schema<IQuestion>({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["radio", "checkbox", "select", "text",],
        required: true
    },
    isMandatory: {
        type: Boolean,

        required: true
    },
    questionnaireID: {
        type: Schema.Types.ObjectId,
        ref: "questionnaires",
        required: true
    }
})

export const QuestionModel = model("questions", QuestionSchema)