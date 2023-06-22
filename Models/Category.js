import { DataTypes as DT, Model } from "sequelize";
import connectionDb from "../connectionDb/connectionDb.js";

const Category = connectionDb.define(
  "Category",
  {
    categoryName: {
      type: DT.STRING
    },
  },
  {
    timestamps: false,
  }
);

export default Category;