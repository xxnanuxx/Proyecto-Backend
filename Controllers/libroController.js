import { Category, Libro } from "../Models/index.js";

class LibroController {
    constructor() {}
    getAllLibros = async (req, res, next) => {
        try {
          const result = await Libro.findAll({
            attributes: ["id", "titulo", "autor", "stock", "precio", "imagen"],
            include: [
                {
                  model: Category,
                  attributes: ["categoryName"],
                },
              ],
          });
          if (result.length === 0) throw new Error("No se encontraron libros");
          res.send({ success: true, message: "Libros encontrados", result });
        } catch (error) {
          res.status(400).send({ success: false, result: error.message });
        }
    };
    getLibrosByCategoria = async (req, res, next) => {
        try {
          const { categoria } = req.body;
          const result = await Libro.findAll({
            where: {
              categoria: categoria,
            },
            attributes: ["id", "titulo", "autor", "stock", "precio", "imagen"],
            include: [
                {
                  model: Category,
                  attributes: ["categoryName"],
                },
            ],
          });
          if (result.length === 0) throw new Error("No se encontraron libros");
          res.send({ success: true, message: "Libros encontrados", result });
        } catch (error) {
          res.status(400).send({ success: false, result: error.message });
        }
    };
    getLibroById = async (req, res, next) => {
        try {
          const { id } = req.params;
          const result = await Libro.findOne({
            where: {
              id: id,
            },
            attributes: ["id", "titulo", "autor", "stock", "precio", "imagen"],
            include: [
                {
                  model: Category,
                  attributes: ["categoryName"],
                },
            ],
          });
          if (!result) throw new Error("No se encontro el  libro");
          res.send({ success: true, message: "Libro encontrado", result });
        } catch (error) {
          res.status(400).send({ success: false, result: error.message });
        }
    };
    createLibro = async (req, res, next) => {
        try {
          const { titulo, autor, stock, precio, imagen, categoria} = req.body;
          const result = await Libro.create({
            titulo,
            autor,
            stock,
            precio,
            imagen,
            categoria
          });
          if (!result.dataValues) throw new Error("No se pudo crear el libro");
          res
            .status(200)
            .send({ success: true, message: "Libro creado con exito" });
        } catch (error) {
          res.status(400).send({ success: false, result: error.message });
        }
    };
    updateLibro = async (req, res, next) => {
      try {
        const { titulo, autor, stock, precio, imagen, categoria} = req.body
        const result = await Libro.findOne({
          where: {
            id: id,
          },
        });
        result = await result.update({

        })
      } catch (error) {
        
      }
    };
    deleteLibro = async (req, res, next) => {
      try {
        const { id } = req.params
        const result = await Libro.destroy({
          where:{
            id: id,
          }
        });
      } catch (error) {
        res.status(400).send({ success: false, result: error.message });
      }
    }
}

export default LibroController