interface BotoesProps{


}

export default function Botoes (props: BotoesProps) {
    return(

        <div className="flex justify-between pt-2 gap-3 ">
            <button className="botao flex-1">
                Dec
            </button>
            <button className="botao flex-1">
                Inc
            </button>
            
        </div>

    )

} 