import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send('bem vindo')
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})