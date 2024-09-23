import { useState } from "react"
import If from "./If"
import { IconCaretDown, IconChevronDown, IconChevronUp } from "@tabler/icons-react"

interface PerguntaProps {
    pergunta: string
    resposta: string
}

export default function Pergunta (props: PerguntaProps) {
    const [aberta, setAberta] = useState <boolean> (false)
    return(
        <div className={`border border-zinc-400 p-1 select-none rounded-md
        overflow-hidden `}>
            <div 
            className=" bg-blue-400 p-5 flex justify-between "
            onClick={() => setAberta (!aberta)}
            >
                <span>{props.pergunta}</span>
                {aberta ?  <IconChevronDown/> : <IconChevronUp/> }
               
            </div>

            {/* {aberta ? "Sim" : "Não"} */}

            {aberta && (

                <div className="p-5">
                {props.resposta}
                </div>
                
            )}

            
        </div>
    )
}