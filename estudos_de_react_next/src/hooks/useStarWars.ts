import { useState } from "react"
import useProcessando from "./useProcessando"

export default function useStarWars () {
    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()
    const [personagens, setPersonagens] = useState<any[]>([])

    async function SimularCamadaAPI() {
        const resposta = await fetch('https://swapi.dev/api/people/')
        const dados = await resposta.json()
        setPersonagens(dados.results)
    }

    async function obterPersonagens() {
        try {
            iniciarProcessamento()
            await SimularCamadaAPI()
            
        }

        finally {
            finalizarProcessamento()
        }
    }

    return { processando, personagens, obterPersonagens }
}