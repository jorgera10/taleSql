//a model is a abastaction

import { DataTypes } from "sequelize";
import db from "../database/db.js";

const taleModel = db.define("books", {
  title: { type: DataTypes.STRING },
  clasification: { type: DataTypes.STRING },
  price: { type: DataTypes.FLOAT },
  description: { type: DataTypes.STRING },
  publication: { type: DataTypes.DATE },
  image: { type: DataTypes.STRING },
});

export default taleModel;
