import express from "express"

const app = express()

// Indicar que usaremos JSON
app.use(express.json())

export {app}