import { use, useCallback, useEffect, useState } from "react";

export default function Contador() {
    const [delta, setDelta] = useState(1);
    const [valor, setValor] = useState(0);
    const  [mult10, setMult10] = useState(0);

    const CalcularValorMult10 = useCallback ((valor: number) => {
        return valor * 10
    }, [valor])

    useEffect(() => {
       const mult10 = CalcularValorMult10(valor)
       setMult10 (mult10)
    }, [valor, CalcularValorMult10])

    // useEffect(() => {
    //     setMult10(valor * 10)
    // }, [valor])

    return (
        <div className="flex flex-col items-center gap-5">
            <span className="text-5xl">{valor}</span>
            <span className="text-xl text-blue-300">{mult10}</span>
            <span className="text-sm text-zinc-500">{delta}</span>
            <div className="flex gap-5"> 
                <button className="botao" onClick={() => setValor(valor - delta)}
                >Incrementar</button>
                <button className="botao" onClick={() => setValor(valortual => valortual + delta)}
                >Decrementar</button>
            </div>
            <input type="number" value={delta} onChange={e => setDelta
                (+e.target.value)}
                className="bg-zinc-900 p-2"
             />
    
        </div>
    )
}