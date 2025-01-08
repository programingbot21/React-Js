
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { App } from "./App.js";

dotenv.config({
    path: './env'
})

connectDB()

.then(() => {
    App.listen(process.env.PORT || 8000, () => {
        console.log(` Server in running at port : 
        ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("Mongo db connection failed !!!", error)
})

