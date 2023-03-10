const express = require('express');
const app = express();
const tasks = require('./routes/task');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json());

//routes

app.use('/api/v1/tasks', tasks);
app.use(express.static('./public'))

app.use(notFound);
app.use(errorHandlerMiddleware);


//Connect DB

const port = process.env.PORT


async function start() {
    try {
        await connectDB()
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()