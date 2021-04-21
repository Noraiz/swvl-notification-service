import * as mongoose from "mongoose";
import { INotification } from "./notification";

const Schema = mongoose.Schema;
export interface IUser  extends mongoose.Document {
  name: String,
  email: String,
  phoneNumber: String,
  notification: mongoose.Types.DocumentArray<INotification>
}
const schema = new Schema({
  name: String,
  email: String,
  phoneNumber: String,
  notification: [{
    type: Schema.Types.ObjectId,
    ref: "notification"
  }]
});

export default mongoose.model("user", schema);
