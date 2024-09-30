import { propagateServerField } from "next/dist/server/lib/render-server"

interface tabelaSeriaAProps {
    times: string[]
}


export default function TabelaSerieA (props: tabelaSeriaAProps) {
    console.log(props.times)

    const itens: any[] = []
     for (let i = 0; i < props.times.length; i++) {
        console.log(props.times[i])
        itens.push(<li key={props.times[i]}>{props.times[i]}</li>)
     }

     const itens2 = props.times.map (time => {
        return ( <li key={time} className="text-xl list-decimal">
            {time}
        </li>
        )
     })

    return (
        <ol> 
           {itens2}
        </ol>
        
    )
}