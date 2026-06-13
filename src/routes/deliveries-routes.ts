import { Router } from "express"

import { DeliveriesController } from "@/controllers/deliveries-controllers"

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated"

import {verifyUserAuthorization} from "../middlewares/verifyUserAuthorizations"

import { DeliveriesStatusController } from "@/controllers/deliveries-status-controller"

const deliveriesRoutes = Router()
const deliveriesController = new DeliveriesController
const deliveriesStatusController = new DeliveriesStatusController

// todas as rotas passarão pelo fluxo de autenticação
deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]))

deliveriesRoutes.post("/", deliveriesController.create)
deliveriesRoutes.get("/", deliveriesController.index)

deliveriesRoutes.patch("/:id/status", deliveriesStatusController.update )


export { deliveriesRoutes }