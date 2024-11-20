import { Request, Response } from "express";
import { UserModel } from "../modules/UsersModel";

export const registerUsers = async (req: Request, res: Response):
    Promise<any> => {
    try {

        //Primero validar que los datos que necesitamos existen
        const name = req.body.name
        const email = req.body.email
        const lastNames = req.body.lastNames
        const password = req.body.password
        const rol = req.body.rol
        //Administradores no pueden crear clientes
        if (req.user?.rol === "administrator" && rol === "client") {
            return res.status(400).json({ msg: "Los administradores no pueden crear clientes" })
        }
        if (!name || !email || !lastNames || !password || !rol) {
            return res.status(400).json({
                msg: "Faltan datos para crear un ususarios"
            })
        }
        // Validar que el usuario sea administrador si el usuario a crear es administrador
        if (rol === "administrator" && req.user?.rol != "administrator") {
            return res.status(400).json({
                msg: "No puedes crear un nuevo adminstrador si no eres unos"
            })
        }

        await UserModel.create({
            name,
            lastNames,
            email,
            password,
            rol
        })

        return res.status(200).json({
            msg: "Usuario registrado con exito"
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Hubo un error al crear el usuario"
        })
    }
}