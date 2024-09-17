import Vo from "@/components/comunicacao/direta/Vo";

export default function PaginaDireta() {
    return(
        <div className=" flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl mb-10">Comunicação direta</h1>
            <Vo nome="Augusto" sobrenome="Straforini "/>
            
        </div>
    )
}