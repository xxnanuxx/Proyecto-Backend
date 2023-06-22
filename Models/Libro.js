import { DataTypes as DT, Model } from "sequelize";
import connectionDb from "../connectionDb/connectionDb.js";

class Libro extends Model {}

Libro.init(
    {
      titulo: {
        type: DT.STRING,
        allowNull: false,
      },
      autor: {
        type: DT.STRING,
        allowNull: false,
      },
      stock: {
        type: DT.INTEGER,
        allowNull: false,
      },
      precio: {
        type: DT.FLOAT,
      },
      imagen:{
        type: DT.STRING
      },
      categoria: {
        type: DT.INTEGER
      }
    },
    {
      sequelize: connectionDb,
      modelName: "Libro",
      timestamps: false,
    }
)

export default Libro