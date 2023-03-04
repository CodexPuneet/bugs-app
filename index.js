const express= require("express");
const { connection } = require("./Config/db");
const { validator } = require("./Middleware/validator.midleware");
const { userRouter } = require("./Routes/user.routes");

const app= express();

const cors= require("cors");

app.use(cors({
    origin : "*"
}))

app.use(express.json());

require("dotenv").config();

app.get("/", (req, res)=>{
    res.send("Welcome to Bugs Backend");
})

app.use("/", userRouter);





app.listen(process.env.PORT, async()=>{
    try{
        await connection
        console.log("Connected to database")
    }
    catch(err){
        console.log(err)
        console.log("Error while connecting to DB")
    }
    console.log(`Running on port ${process.env.PORT}`)
});