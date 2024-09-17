interface BotoesProps{
    Inc: (valor: number) => void
    Dec: (valor: number) => void

}

export default function Botoes (props: BotoesProps) {
    return(

        <div className="flex justify-between pt-2 gap-3 ">
            <button className="botao flex-1" onClick={() => props.Dec(1)}>
                Dec
            </button>
            <button className="botao flex-1" onClick={() => props.Inc (1)}>
                Inc
            </button>
            
        </div>

    )

} 