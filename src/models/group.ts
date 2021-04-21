import * as mongoose from "mongoose";
import { IUser } from "./user";

const Schema = mongoose.Schema;
interface IGroup  extends mongoose.Document{
  name: String,
  users: mongoose.Types.DocumentArray<IUser>
}
const schema = new Schema<IGroup>({
  name: String,
  users: [{
    type: Schema.Types.ObjectId,
    ref: "user"
  }]
});

export default mongoose.model<IGroup>("group", schema);
