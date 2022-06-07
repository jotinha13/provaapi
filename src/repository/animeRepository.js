import {con} from './connection.js'

export  async function inserirAnime(anime) {
    const comando = `insert into tb_anime( nm_anime)
                    values (?)`

                    const [resp] = await con.query(comando, [ anime.nome] )
                    anime.id = resp.insertId
                    return anime;
}

export async function todosAnimes(){
    const comando = `select id_anime    id,
                    nm_anime            anime
                    from tb_anime;`

                    const [linhas] = await con.query(comando)
                    return linhas;
}
