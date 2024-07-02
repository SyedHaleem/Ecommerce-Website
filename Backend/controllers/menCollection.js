import MenCollectionModel from "../models/menCollection.js";

export const getProducts = async (req, res) => {
  try {
    const products = await MenProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  const product = req.body;
  const newProduct = new MenProductModel(product);

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;


  try {
    const updatedProduct = await MenProductModel.findByIdAndUpdate(id, product, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await MenProductModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
