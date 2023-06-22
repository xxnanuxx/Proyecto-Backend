import { Router } from "express";
import userRoutes from "./userRoutes.js";
import libroRoutes from "./libroRoutes.js"
const routes= Router()

routes.use("/users", userRoutes)
routes.use("/libro", libroRoutes)

export default routes