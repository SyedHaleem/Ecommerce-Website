import bodyParser from "body-parser";
import cors from 'cors';
import express from 'express';
import mongoose from "mongoose";

const app = express();
const url = "mongodb+srv://syedhaleem:haleem110@syedhaleem.um7if0c.mongodb.net/?retryWrites=true&w=majority&appName=syedhaleem";

mongoose.connect(url)
  .then(() => console.log("Connected to DB"))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Add your routes here
