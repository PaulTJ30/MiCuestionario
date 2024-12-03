import express, { Application, Request, Response } from "express";
import cors from "cors";
import { registerUsers, singin } from "./controllers/UsersController";
import { createQuestionnaire } from "./controllers/QuestionnairesController";
import { addQuestion } from "./controllers/QuestionController";
import { addOption } from "./controllers/OptionController";
const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (_req: Request, res: Response) => {
    res.send("Hola desde mi servidor con TS")
})
//Users
app.post("/users/create", registerUsers)
app.post("/users/singin", singin)

//Cuestionarios
app.post("/questionnaire/create", createQuestionnaire)

// Opciones
app.post('/option/add', addOption)


// Preguntas
app.post('/question/add', addQuestion)

export default app

