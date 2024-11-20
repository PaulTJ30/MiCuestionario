import { Schema, model } from "mongoose";

interface IAnswer {
    questionnaireID: Schema.Types.ObjectId | string;
    questionID: Schema.Types.ObjectId | string;
    answer: string;
}

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