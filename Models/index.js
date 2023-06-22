import Category from "./Category.js";
import User from "./User.js";
import Role from "./Role.js";
import Libro from "./Libro.js"

Role.hasMany(User, {
  foreignKey: "roleId",
});
User.belongsTo(Role, {
  foreignKey: "roleId",
});

Category.hasMany(Libro, {
  foreignKey: "categoria",
});
Libro.belongsTo(Category, {
  foreignKey: "categoria",
});

export { Category, User, Role, Libro };