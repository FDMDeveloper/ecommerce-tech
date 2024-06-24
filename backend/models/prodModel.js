import mongoose from "mongoose";
const Schema = mongoose.Schema; // Destructure for conciseness

const prodSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Schema.Types.Buffer, required: true }, // Use Buffer for binary data
  category: { type: String, required: true },
});

const prodModel = mongoose.models.prod || mongoose.model("prod", prodSchema);

export default prodModel;
