import Contador from "@/components/comunicacao/indireta/Contador";

export default function PaginaIndireta() {
    return(
        <div className="gap-5 flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl mb-10 font-black  ">Comunicação Indireta</h1>
            <div className=" flex gap-5">
                <Contador/>
                <Contador/>
                <Contador/>
            </div>
            
        </div>
    )
}