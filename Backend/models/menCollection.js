import mongoose from "mongoose";

// Define the schema to match the product data structure
const MenCollectionSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  discountRate: { type: Number } // Not all products have a discount rate
});

// Create a model using the schema
const MenCollectionModel = mongoose.model("MenCollection", MenCollectionSchema);

// Export the model
export default MenCollectionModel;
