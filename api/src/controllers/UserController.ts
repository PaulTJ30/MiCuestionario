import { Request, Response } from "express";
import { UserModel } from "../modules/UsersModel";
import jwt from "jsonwebtoken"

export const registerUsers = async (req: Request, res: Response):
    Promise<any> => {
    try {

        //Primero validar que los datos que necesitamos existen
        const name = req.body.name
        const lastNames = req.body.lastNames
        const email = req.body.email
        const password = req.body.password
        const rol = req.body.rol
        //Administradores no pueden crear clientes
        if (req.user?.rol === "administrator" && rol === "client") {
            return res.status(400).json({ msg: "Los administradores no pueden crear clientes" })
        }
        if (!name || !email || !lastNames || !password || !rol) {
            return res.status(400).json({
                msg: "Faltan datos para crear un usuario"
            })
        }
        // Validar que el usuario sea administrador si el usuario a crear es administrador
        if (rol === "administrator" && req.user?.rol != "administrator") {
            return res.status(400).json({
                msg: "No puedes crear un nuevo adminstrador si no eres unos"
            })
        }

        const user = await UserModel.create({
            name,
            lastNames,
            email,
            password,
            rol
        })
        const token = jwt.sign(JSON.stringify(user), "shhhh")

        return res.status(200).json({
            msg: "Usuario registrado con exito", token
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Hubo un error al crear el usuario"
        })
    }

}

export const singin = async (req: Request, res: Response): Promise<any> => {

    // Correo y contraseña
    // Veirificar que el usuario existe
    // Si no existe devuelven error
    try {
        const { email, password } = req.body
        if (!email || password) {
            return res.status(400).json({
                msg: "Correo y contraseña necesarios"
            })
        }
        const user = await UserModel.findOne({ correo: req.body.email, password: req.body.password })
        if (!user) {
            return res.status(404).json({
                msg: "Usuario no existente"
            })
        }
        const token = jwt.sign(JSON.stringify(user), "shhhh")
        return res.status(200).json({
            msg: `Este es tu token `, token
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Hubo un erro al encontrar el usuario"
        })
    }

}