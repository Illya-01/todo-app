import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import todoRoutes from './routes/todoRoutes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/todos', todoRoutes)

app.get('/', (_, res) => {
  res.send('API is running...')
})

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  })
  .catch(err => console.error(err))
