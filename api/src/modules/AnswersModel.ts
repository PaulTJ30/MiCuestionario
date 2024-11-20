import { Schema, model } from "mongoose";
import { IAnswer } from "../GlobalTypes";


const AnswerSchema = new Schema<IAnswer>({
    questionnaireID: {
        type: Schema.Types.ObjectId,
        ref: "questionnaires",
        required: true
    },
    questionID: {
        type: Schema.Types.ObjectId,
        ref: "questions",
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})

export const AnswerModel = model("answers", AnswerSchema) 