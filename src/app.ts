import express from "express"
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../src/.env" });
import mongoose from "mongoose";
const userRoute = require('./Routes/userRoutes');
const toDoRoute = require('./Routes/toDoRoutes');

const app = express();
app.use(express.json())
app.use("/user",userRoute)
app.use("/todo", toDoRoute)


const connectionString = "mongodb+srv://adham:0WCTuik8yAGHUtiJ@atlascluster.nn9mejc.mongodb.net/?retryWrites=true&w=majority"

// const connectionString = process.env.DATABASE_LINK!.replace(
//   "<password>",
//   process.env.DATABSE_PASSWORD!
// );

mongoose.connect(connectionString).then((value) => {
  console.log("Database connected successfully");
});


app.listen(3000, function(){

    console.log("listening on port 3000");
    
})