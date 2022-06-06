import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const server = express()
server.use(cors())
server.use(express.json())


server.listen(process.env.PORT, 
                ()=>  console.log(`A api está on na porta ${process.env.PORT}`))