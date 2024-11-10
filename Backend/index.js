import  express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoutes from "./route/book.route.js"
import userRoutes from "./route/user.route.js"
import cors from  "cors";
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4001;
const URI =process.env.MongoDBURI;

//contect to mongoDB Database

try{

    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("connected  to mongoDB")

}catch(error){
    console.log("error", error)

}

// defining routes

app.use("/book", bookRoutes)
app.use("/user", userRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Change `port` to `PORT`
});
 