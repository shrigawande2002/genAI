import express from 'express'
import router from './Routes/routes.js'
import dotenv from 'dotenv'
import cors from 'cors'
import connection from './utils/db.js'
import bodyParser from 'body-parser'
dotenv.config()
const app = express()
const PORT = process.env.PORT 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
connection();
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(router)

