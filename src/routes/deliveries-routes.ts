import { Router } from "express"

import { DeliveriesController } from "@/controllers/deliveries-controllers"

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated"

import {verifyUserAuthorization} from "../middlewares/verifyUserAuthorizations"


const deliveriesRoutes = Router()
const deliveriesController = new DeliveriesController


// todas as rotas passarão pelo fluxo de autenticação
deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]))

deliveriesRoutes.post("/", deliveriesController.create)

export { deliveriesRoutes }