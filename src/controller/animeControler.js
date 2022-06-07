import { Router } from "express";

import { inserirAnime ,todosAnimes} from "../repository/animeRepository.js";


const server  = Router()

server.post('/anime', async (req, resp) => {
    const anime = req.body;
    const x = await inserirAnime(anime)

    resp.send(x)
})




server.get('/anime', async (req, resp) => {
    try{
        const resposta= await todosAnimes()
        resp.send(resposta) 
    }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default server;