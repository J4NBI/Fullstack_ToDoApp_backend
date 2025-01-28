import express from 'express';
import dotenv from 'dotenv';
import { connectToDB } from './utils/connect.js';
import  routes  from './routes/ToDoRoute.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
dotenv.config();

connectToDB();

app.use(express.json());
app.use(bodyParser.json());
app.use(routes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});