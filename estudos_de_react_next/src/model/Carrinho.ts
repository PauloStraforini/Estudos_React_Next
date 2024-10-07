export default interface Carrinho {
    produtos: Produto[]
    adicionar(produto: Produto): void
    remover(produto: Produto): void
    esvaziar(): void
    total(): number
}