import express, { Application, Request, Response } from "express"
import userRoutes from "./routes/user.routes"
import productRoutes from "./routes/product.routes"
const app: Application = express()

// middlewares
app.use(express.json())


app.use('/users',userRoutes)
app.use('/products',productRoutes)

export default app;