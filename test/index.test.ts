import {test,expect,describe} from "vitest"
import axios from "axios"


describe("Primeiro teste da aplicação", ()=>{
    test("Espero que 1 seja igual a 1",()=>{
        expect(1).toBe(1)
    })
})

describe("Cadastro de filmes",()=>{
    test("Espero que filme seja cadastrado",async ()=>{
        const filme = {
            titulo:"Barbie",
            descricao:"barbie",
            imagem:"a"
        }
        //Passar para minha API
        const resposta = await axios.post("http://localhost:3000/filmes",filme)
        //Espero que minha API tenha cadastrado o filme
        expect(resposta.status).toBe(201)
        expect(resposta.data).toEqual(filme)
    })
})

