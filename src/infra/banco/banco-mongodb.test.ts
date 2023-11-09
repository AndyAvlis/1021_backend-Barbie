import {describe,test, expect} from 'vitest'
import {BancoMongoDB} from './banco-mongodb'

describe('BancoMongoDB teste', () => {
    test('BancoMongoDB', () => {
        const bancoMongoDB = new BancoMongoDB()
        expect(bancoMongoDB).toBeDefined()
    })
    test('deve salvar um filme', async () => {
        const bancoMongoDB = new BancoMongoDB()
        const filme = {
            id: 1,
            titulo: 'O Poderoso Chefão',
            descricao: 'Filme de máfia',
            imagem: 'fotofilme.jpg'
        }
        const result = await bancoMongoDB.salvar(filme)
        expect(result).toBe(true)
    })
})