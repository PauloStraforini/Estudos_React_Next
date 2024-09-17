export default function Caixa(props: any) {
    return(
        <div className={
            ` flex justify-center items-center m-2 rounded-md w-64 h-64 font-bold text-xl
            bg-yellow-500 text-red-700  `
             }>

            {props.children}
            
        </div>
    )
}