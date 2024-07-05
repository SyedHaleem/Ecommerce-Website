import mongoose from "mongoose";

const WomenCollectionSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  discountRate: { type: Number } // Not all products have a discount rate
});

const WomenCollectionModel = mongoose.model("WomenCollection", WomenCollectionSchema);

export default WomenCollectionModel;
