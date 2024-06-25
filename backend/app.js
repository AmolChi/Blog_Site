const express = require('express');
const app = express();
const connectDB = require('./db/connectDB.js')
const cors = require('cors');
const blogs = require('./routes/routes.js')
require('dotenv').config();

app.use(cors({
    origin:'*'
}))

app.use(express.json());
app.use('/api/v1/posts',blogs);

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(process.env.PORT,()=>{
            console.log(`App listening on port ${process.env.PORT}`);
        })
    }catch(err){
        console.log(err);
    }
}

start();