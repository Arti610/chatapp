import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();

 const corsOptions ={
    origin:['http://localhost:3000','http://localhost:3001'], 
    credentials:true,          
    optionSuccessStatus:200
};

app.use(cors(corsOptions));
  
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);
app.use("/api/users", userRoute);

export {app, corsOptions}
