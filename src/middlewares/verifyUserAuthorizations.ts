import {Request, Response, NextFunction} from "express"
import { AppError } from "@/utils/AppError"


// Usamos um array de string [] para permitir passar mais de um perfil
function verifyUserAuthorization(role: string[]){
return (request: Request, response:Response, next: NextFunction) =>{

    if (!request.user) {
        throw new AppError("Unauthorized", 401)
    }

    if (!role.includes(request.user.role)){
        throw new AppError("Unauthorized", 401)
    // Verifica se a role do usuário não existe nas permissões (roles) definidas
        }

return next()
}
}

export {verifyUserAuthorization}