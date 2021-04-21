require("dotenv").config();
import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";



import NotificationRoute from "../routes/notification";
import UserRoute from "../routes/user";
class App {
  public app: express.Application;
  public mongoUrl: string = process.env.MONGO_URI;

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    NotificationRoute(this.app);
    UserRoute(this.app);
  }
  
  private config(): void {
    this.app.use(express.json())
  }
  private mongoSetup(): void {
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  }
}
export default new App().app;
