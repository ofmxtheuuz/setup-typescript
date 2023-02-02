import express from "express"
import clientRoutes from "./routes/client"
const app = express()


app.use(clientRoutes)

app.listen(3333, () => {
    console.log("servidor aberto e operando na porta 3333!")
})