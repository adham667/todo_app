import express from "express"
const userRoute = require('./Routes/userRoutes');
const toDoRoute = require('./Routes/toDoRoutes');

const app = express();
app.use(express.json())
app.use("/user",userRoute)
app.use("/todo", toDoRoute)

app.listen(3000, function(){

    console.log("listening on port 3000");
    
})