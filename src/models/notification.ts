import * as mongoose from "mongoose";
import { sendNotification } from '../services/notification'
const Schema = mongoose.Schema;

export interface INotification  extends mongoose.Document{
  type: String,
  medium: String,
  receivers: [String],
  subject: String,
  text: String,
}
const schema = new Schema<INotification>({
  type: String,
  medium: String,
  receivers: [String],
  subject: String,
  text: String,

});
schema.post('save', async function (doc) {
  sendNotification(doc)
});
export default mongoose.model("notification", schema);
