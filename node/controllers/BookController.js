import taleModel from "../models/taleModel.js";

//CRUD methods

//read all

export const getAllTale = async (req, res) => {
  try {
    const tails = await taleModel.findAll();
    res.json(tails);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//read

export const getTale = async (req, res) => {
  try {
    const tale = await taleModel.findAll({
      where: { id: req.params.id },
    });
    res.json(tale[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
// create

export const createTale = async (req, res) => {
  try {
    await taleModel.create(req.body);
    res.json({ message: "Registro exitoso!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//update

export const updateTale = async (req, res) => {
  try {
    await taleModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Registro actualizado!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//delete

export const deleteTale = async (req, res) => {
  try {
    await taleModel.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Registro eliminado!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
