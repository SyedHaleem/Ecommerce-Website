import mongoose from "mongoose";

const KidsCollectionSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  discountRate: { type: Number } // Not all products have a discount rate
});

const KidsCollectionModel = mongoose.model("KidsCollection", KidsCollectionSchema);

export default KidsCollectionModel;
