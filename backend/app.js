import express from "express";
import authRoute from './routes/auth.route.js';
import messageRoute from './routes/message.route.js';
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/message', messageRoute);

export default app;