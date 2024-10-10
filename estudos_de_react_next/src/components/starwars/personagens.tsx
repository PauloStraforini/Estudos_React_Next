import useProcessando from '@/hooks/useProcessando';
import { useState } from 'react';

export default function Personagens() {

    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()

    async function SimularCamadaAPI() {
        return new Promise((resolve) => {
            setTimeout (() => {
                resolve (1)
            },  3000)
        const data = Date.now()
        while (Date.now() < data + 3000) { }
        })
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

    return (
        <div className={`flex justify-center items-center h-screen`}>
            {processando ? (
                <div>Processando...</div>
            ): (
                <h1>Conteudo com Personagens</h1>
            )}
            
            <button onClick={obterPersonagens} className={`
                bg-blue-500 p-2`}>obter</button>        
        </div>
    )
}