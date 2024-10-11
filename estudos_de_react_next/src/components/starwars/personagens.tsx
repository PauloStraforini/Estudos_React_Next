import useProcessando from '@/hooks/useProcessando';
import useStarWars from '@/hooks/useStarWars';
import { useState } from 'react';

export default function Personagens() {
    const { processando, personagens, obterPersonagens } = useStarWars();

    return (
        <div className="flex justify-center items-center h-screen">
            {processando ? (
                <div>Processando...</div>
            ) : personagens.length > 0 ? (
                <ul>
                    {personagens.map((personagem, i) => (
                        <li key={personagem.name}>{personagem.name}</li>
                    ))}
                </ul>
            ) : (
                <div>Nenhum personagem encontrado</div>
            )}
            
            <button onClick={obterPersonagens} className="bg-blue-500 p-2">
                obter
            </button>
        </div>
    );
}
