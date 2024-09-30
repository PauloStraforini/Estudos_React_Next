import TabelaSerieA from "@/components/Listas/TabelaSerieA"
import { IconBallFootball } from "@tabler/icons-react"

export default function PaginaLisaBasica () {
    const times =[
    "Botafogo", 
    "Palmeiras",	
    "Fortaleza"	,
    "Flamengo",	
    "São Paulo",
    "Bahia",
    "Cruzeiro",	
    "Internacional",
    "Atlético-MG",
    "Vasco", 
]

    return(
        <div className={`flex justify-center flex-col items-center gap-4 h-screen`}>
            <h1 className={`flex items-center text-5xl font-black`}>
                <IconBallFootball size={50} stroke={1} className="text-green-600" />
                Tabela Série A
            </h1>
            <TabelaSerieA times={times} />   
        </div>
    )
}