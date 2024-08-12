//  import express from 'express'
// import cors from  'cors'
// import 'dotenv/config'
// import songRouter from './src/routes/songRoute.js';
// import connectDB from './src/config/mongodb.js';
// import connectCloudinary from './src/config/cloudinary.js';
// import albumRouter from './src/routes/albumRoute.js';


// // app config

// const app = express();
// const port = process.env.PORT || 4000;
// connectDB();
// connectCloudinary();

// // middlewares

// app.use(express.json());
// app.use(cors());



// // initializing routes

// app.use("/api/song",songRouter)
// app.use('/api/album',albumRouter)

// app.get('/',(req,res)=>res.send("API Working messeage from Pankaj Rawat"))

// app.listen(port,()=>console.log(server started on ${port}))

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Configure CORS
app.use(cors({
  origin: [
    'https://spotify-frontend-yegh.onrender.com',
    'https://spotify-admin-q2ub.onrender.com'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

// Serve static files from 'public' directory
app.use('/assets', express.static(path.join(path.resolve(), 'public/assets')));

// Routes
app.use("/api/song", songRouter);
app.use('/api/album', albumRouter);

app.get('/', (req, res) => res.send("API Working message from Pankaj Rawat"));

app.listen(port, () => console.log(`Server started on ${port}`));
