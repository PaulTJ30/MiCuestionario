import { Request, Response } from 'express';
import { OptionModel } from '../modules/OptionsModel';
import { QuestionModel } from '../modules/QuestionsModel';

export const addOption = async (req: Request, res: Response): Promise<any> => {
    const { questionId, optionText } = req.body;

    if (!questionId || !optionText) {
        return res.status(400).json({ msg: "Faltan datos para agregar la opción" });
    }

    try {
        // Crear la opción
        const option = await OptionModel.create({
            questionId,
            optionText
        });

      
       
        return res.status(201).json({ msg: "Opción agregada con éxito", option });
    } catch (error) {
        return res.status(500).json({ msg: "Error al agregar la opción", error });
    }
};

