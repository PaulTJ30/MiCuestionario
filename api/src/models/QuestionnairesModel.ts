import { Schema, model } from "mongoose";
import { IQuestionnaire } from "../GlobalTypes";


const QuestionnaireSchema = new Schema<IQuestionnaire>({
    UsersID: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    descrption: {
        type: String,
        required: true
    }
})

export const QuestionnaireModel = model("questionnaires", QuestionnaireSchema)