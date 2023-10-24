import express from "express"
const app = express()
app.use(express.json())

//Tenho que ter uma rota push pra cadastrar um filme
app.post("/filmes",(req,res)=>{
    const filme = {
        titulo:"Barbie",
        descricao:"barbie",
        imagem:"a"
    }
    res.status(201).send(filme)
})
app.get("/filmes",(req,res)=>{
    res.send("Filmes listados com sucesso")
})

//tenho que iniciar o servidor na porta 3000
app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000")
})