import { Router } from "express";

import { inserirAnime } from "../repository/animeRepository.js";


const server  = Router()

server.post('/anime/inserir', async (req, resp) => {
    const {anime} = req.body;
    const x = await inserirAnime(anime)

    resp.send(x)
})

server.get('/anime', async (req, resp) => {
    try{
        const resposta= await listarFilmes()
        resp.send(resposta) 
    }catch{
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default server;