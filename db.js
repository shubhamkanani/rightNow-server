import mongoose from 'mongoose'
import timestamps from 'mongoose-timestamp'
import appConfig from "./config";

mongoose.Promise = global.Promise;
mongoose.plugin(timestamps);

//connection code of mongoose

export const connect = (config = appConfig) => {
    mongoose.set("useCreateIndex", true);
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.connect(
        "mongodb+srv://dbUser:dbUser@cluster0-0sfyb.mongodb.net/<dbname>?retryWrites=true&w=majority",
      { useUnifiedTopology: true,
        useNewUrlParser: true
      }
    ).then(()=>{console.log("db connected")})
    .catch((err)=>{console.log(err)}
    )
  };