import { Router } from "express";
import LibroController from "../Controllers/libroController.js"
const libroRoutes = Router()

const libroController = new LibroController();

libroRoutes.get("/", libroController.getAllLibros)
libroRoutes.get("/categoria", libroController.getLibrosByCategoria)
libroRoutes.get("/:id", libroController.getLibroById)
libroRoutes.post("/", libroController.createLibro)
libroRoutes.post("/:id", libroController.deleteLibro)

export default libroRoutes