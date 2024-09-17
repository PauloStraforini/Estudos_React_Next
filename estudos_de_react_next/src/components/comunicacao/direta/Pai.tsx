import Filho from "./Filho";

interface PaiProps{
    nome: string
    sobrenome:string 
}

export default function Pai (props: PaiProps) {
    return( 
        <div className={`flex gap-5 p-5 rounded-md bg-red-500 text-white border
        border-white flex-col`}>

            <div className="flex justify-center gap-2">
                <span className="font-black">Pai</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>

            <div className="flex gap-5">
            <Filho nome="Paulo" sobrenome={props.sobrenome} />
            <Filho nome="Maria" sobrenome={props.sobrenome}/>
            </div>

        </div>
    )
}