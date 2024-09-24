import { useState } from "react"
import If from "./If"
import { IconCaretDown, IconChevronDown, IconChevronUp } from "@tabler/icons-react"

interface PerguntaProps {
    indice: number
    pergunta: string
    resposta: string
    aberta: boolean
    AlternarVisibilidade: (indice: number) => void
}

export default function Pergunta (props: PerguntaProps) {
    return(
        <div className={`border border-zinc-400 p-1 select-none rounded-md overflow-hidden`}>
            <div 
            className="bg-blue-400 p-5 flex justify-between"
            onClick={() => props.AlternarVisibilidade(props.indice)}
            >
                <span>{props.pergunta}</span>
                {props.aberta ? <IconChevronDown/> : <IconChevronUp/>}
            </div>

            {props.aberta ? (
                <div className="p-5">
                    {props.resposta}
                </div>
            ) : null}
        </div>
    )
}
