import ProdutoItem from "@/components/Listas/ProdutoItem"

export default function PaginaProdutos() {
    const produto = produto[0]
    return( 
        <div className={`flex flex-col justify-center items-center
        h-screen `}>
            <ProdutoItem produto={produto}/> 
        </div>
    )
}