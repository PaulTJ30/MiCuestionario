import { Request, Response } from 'express';
import { QuestionnaireModel } from '../modules/QuestionnairesModel';

export const createQuestionnaire = async (req: Request, res: Response): Promise<any> => {
    try {
        const title = req.body.title;
        const description = req.body.description
        


        if (!title) {
            return res.status(400).json({ msg: "Falta titulo para crear el cuestionario" });
        }
        const UsersID = req.user?._id;
        if (!UsersID) {
            return res.status(400).json({ msg: "No se encontró el ID del usuario" });
        }

        const questionnaire = await QuestionnaireModel.create({
            title,
            description,
            UsersID
        });


        return res.status(201).json({ msg: "Cuestionario creado con éxito", questionnaire });
    } catch (error) {
        return res.status(500).json({ msg: "Error al crear el cuestionario", error });
    }
};


