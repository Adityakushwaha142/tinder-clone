import mongoose from "mongoose";
const dataSchema = mongoose.Schema({
  name: String,
  url: String,
});
export default mongoose.model("cards", dataSchema);
