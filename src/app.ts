import express from "express"
import "express-async-errors"

import { routes } from "./routes"
import { errorHandling } from "./middlewares/error-handling"

const app = express()

// Indicar que usaremos JSON
app.use(express.json())

app.use(routes)

app.use(errorHandling)

export {app}