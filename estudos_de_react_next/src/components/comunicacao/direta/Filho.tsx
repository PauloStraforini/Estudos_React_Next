interface FilhoProps{

    nome: string
    sobrenome: string

}

export default function Filho (props: FilhoProps) {
    
    return( 
        <div className={`flex flex-col justify-center items-center bg-blue-500 
            border border-white rounded-md p-5`}>

            <div className="flex justify-center items-center gap-3 ">
                <span className="font-black">Filho</span>

                <div>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
                </div>

            </div>
            
        </div>
    )
}