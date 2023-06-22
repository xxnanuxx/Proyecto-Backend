import { Category } from "../Models/index.js";

const categorySeed = async () => {
  try {
    await Category.bulkCreate([{ categoryName: "Accion" }, { categoryName: "Terror" }, { categoryName: "Comics" }]);
  } catch (error) {
    console.log(error.message)
  }
};

export default categorySeed