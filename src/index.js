const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// routes
const userRoutes = require('./routes/user')

// environment variables
env.config();

// mongodb connection
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.4l57g.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
    }).then(() => {
        console.log('database connected')
    })

app.use(bodyParser());
app.use('/api', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})