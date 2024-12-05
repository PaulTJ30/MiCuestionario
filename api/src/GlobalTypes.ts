import { Schema } from "mongoose";

export interface IAnswer {
    questionnaireID: Schema.Types.ObjectId | string;
    questionID: Schema.Types.ObjectId | string;
    answer: string;
}

export interface IQuestionnaire {
    userID: Schema.Types.ObjectId | string
    title: string,
    description: string,
}

export interface IOption {
    questionID: Schema.Types.ObjectId | string
    title: string;

}

export interface IQuestion {
    title: string,
    type: "radio" | "checkbox" | "select" | "text",
    isMandatory: boolean,
    questionnaireID: Schema.Types.ObjectId | string
}

export interface IUser {
    name: string,
    email: string,
    lastNames: string,
    password: string,
    rol: "administrator" | "client";
};