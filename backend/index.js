import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { BACKEND_PORT, MONGODB_URL, FRONTEND_URL  } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());
app.use(cors());
// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/books', booksRoute);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log('App connected to database');
    app.listen(BACKEND_PORT, () => {
      console.log(`App is listening to port: ${BACKEND_PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
