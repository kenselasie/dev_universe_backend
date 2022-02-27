import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/user.routes.js'

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

dbConnection().catch(err => console.log(err));

async function dbConnection() {
    await mongoose.connect('mongodb://localhost:27017/dev_universe_backend');
    console.log('Database successfully connected!')
}
app.use('/user', userRoutes)

app.listen('3000',  () => {
    console.log('Application is runnning on port 3000')
})

