interface DisplayProps{
    valor: number

}

export default function Display (props: DisplayProps) {
    return(

        <div className={`bg-zinc-800 rounded-sm text-5xl p-5 font-black 
        flex justify-center items-center flex-1`} >
            {props.valor}
        </div>

    )

} 