import { Request, Response } from 'express';
import { QuestionModel } from '../modules/QuestionsModel';
import { QuestionnaireModel } from '../modules/QuestionnairesModel';

export const addQuestion = async (req: Request, res: Response): Promise<any> => {
    const title = req.body.title;
    const type = req.body.type;
    const options = req.body.options;

    if (!title || !type) {
        return res.status(400).json({ msg: "Faltan datos para agregar la pregunta" });
    }

    try {

        const question = await QuestionModel.create({

            title,
            type,
            options
        });


        return res.status(201).json({ msg: "Pregunta agregada con éxito", title });
    } catch (error) {
        return res.status(500).json({ msg: "Error al agregar la pregunta", error });
    }
};
