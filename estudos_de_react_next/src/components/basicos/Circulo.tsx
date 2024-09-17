interface CirculoProps {
    texto: string 
    quasePerfeito?: boolean
}

export default function Circulo(props: CirculoProps) {
    console.log(props)
    return(
        <div className={`
        h-64 w-64 flex justify-center items-center
         bg-red-500 text-black text-3xl font-semibold
         ${props.quasePerfeito ? 'rounded-2xl' : 'rounded-full'}
        `}>
            {props.texto}
        </div>
    )
}