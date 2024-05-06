import express from "express";
import authRoute from './routes/auth.route.js';
import messageRoute from './routes/message.route.js';
import userRoute from './routes/user.route.js';
import cookieParser from "cookie-parser";
import cors from 'cors'
import protectRoute from "./middleware/protectRoute.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "*",
    credentials : true
}))


app.use('/api/auth', authRoute);
app.use('/api/message', messageRoute);
app.use('/api/users', userRoute )

export default app;