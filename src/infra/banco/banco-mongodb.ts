import FilmeRepositorioInterface from "../../aplicacao/filme-repositorio-interface";

export class BancoMongoDB implements  FilmeRepositorioInterface {
  // implementação
  async salvar(filme: Filme): Promise<Filme> {
    return new Promise((resolve) => {
      resolve(filme);
    });
  }
  async listar(): Promise<Filme[]> {
    return new Promise((resolve, reject) => {
      reject(new Error("Not implemented yet"));
    })
  }
  async buscarPorId(id:number): Promise<Filme> {
    return new Promise((resolve, reject) => {
      reject(new Error("Not implemented yet"));
    })
  }
}
type Filme = {
  id: number,
  titulo: string,
  descricao: string,
  imagem: string
};