import Pai from "./Pai";

interface VoProps{
    nome: string
    sobrenome: string
}
export default function Vo(props: VoProps) {
    return( 
        <div className={`flex gap-5 p-5 rounded-md bg-purple-500 text-white border
        border-white flex-col`}>

            <div className="flex justify-center gap-2 twxt-2xl">
                <span className="font-black">Avô</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>

            <div className="flex gap-5 ">
            <Pai nome="Marcio" sobrenome={props.sobrenome} />
            <Pai nome="Sandra" sobrenome={props.sobrenome} />
            <Pai nome="Luiz" sobrenome={props.sobrenome} />
            </div>

        </div>
    )
}