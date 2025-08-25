import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json())
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send({
        message: "Welcome to e-commerce"
    })
})

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgCyan.white)
})
