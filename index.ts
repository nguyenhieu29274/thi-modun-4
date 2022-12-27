import express from 'express';

import * as path from "path";
import bodyParser from "body-parser";
import * as mongoose from "mongoose";
const app = express();
const PORT = 3000;
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/staff')
    .then(() => {
        console.log('successfylly!!!');
    })
    .catch((err) => {
        console.log(err.message)
    });




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());


app.listen(PORT,()=> {
    console.log('server running!!')
});