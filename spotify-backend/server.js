import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path'; // Import path module for resolving paths
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// Serve static files from the 'public' directory
app.use('/assets', express.static(path.join(path.resolve(), 'public/assets')));



// initializing routes

app.use("/api/song",songRouter)
app.use('/api/album',albumRouter)

app.get('/',(req,res)=>res.send("API Working messeage from Pankaj Rawat"))

app.listen(port,()=>console.log(`server started on ${port}`))
