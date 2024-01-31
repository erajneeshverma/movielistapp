import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));

app.use(express.json({
    limit: "16kb"
}));

app.use(express.urlencoded({
    extended: true, 
    limit: "16kb"
}));

app.use(express.static("public"));

app.use(cookieParser());



//routes import here

import movieRouter from '../src/routes/movie.route.js';


//router declartion

app.use("/api/v1/movie",movieRouter);



export {app};
