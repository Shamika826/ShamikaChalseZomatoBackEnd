const express =  require("express")
const app =  express()
const API_Routers_File =  require("./Routers/API_Routers")
const cors =  require("cors")

const mongoose = require("mongoose")


// const URI = " mongodb://127.0.0.1:27017/Edureka"//ye kabhi kabhi work nahi karte

// const URI = "mongodb://localhost:27017/Edureka"//ye kabhi kabhi work nahi karte

// const URI = "mongodb://0.0.0.0:27017/Edureka";
const URI="mongodb+srv://shamikachalse:shamikachalse@cluster0.yinsxhm.mongodb.net/Edureka?retryWrites=true&w=majority";



app.use(cors())//enable cors request

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/",API_Routers_File)

// const port = 2000
const port = process.env .PORT || 2000


console.log("MongoDB Database connecting...")
mongoose.connect(URI).then(
    (value)=>{
        app.listen(
            port,
            ()=>{
                console.log("MongoDB Database connected successfully with Node.js application")
                console.log("Application is running on port  = ",port)
            }
        )
    }
).catch(
    (error)=>{
        console.log("Error catched = ",error)
    }
)

