const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// const { default: mongoose } = require('mongoose')
const port = 5000
const cors = require('cors')
app.use(cors());
const connectDp = require('./dp/connect')
require('dotenv').config()

app.use(express.json())
// app.use(express.static('../'))
app.get('/hello', (req, res) => {
    res.send('task manager app')
})

app.use('/api/v1/tasks', tasks)



app.get('/', (req, res) => {
    res.send('home');
})

const start = async () =>{
    try {
        await connectDp(process.env.MONGO_URI)
        app.listen(port,   
            console.log("server is running "))
        
    } catch (error) {
        console.log(error)
    }
}
start()

