import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
    const [ativo, setAtivo] = useState<number>(-1); // Índice da pergunta ativa, -1 significa nenhuma aberta

    function AlternarVisibilidade(indice: number) {
        if (indice === ativo) {
            setAtivo(-1); // Fecha a pergunta se já estiver aberta
        } else {
            setAtivo(indice); // Abre a nova pergunta
        }
    } 

    return (
        <div className="flex flex-col gap-4 md:w-3/5 w-[90%]">
            <Pergunta
                indice={0}
                pergunta="Quem descobriu o Brasil?"
                resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                aberta={ativo === 0}
                AlternarVisibilidade={AlternarVisibilidade}
            />
            <Pergunta
                indice={1}
                pergunta="React é uma Framework?"
                resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                aberta={ativo === 1}
                AlternarVisibilidade={AlternarVisibilidade}
            />
            <Pergunta
                indice={2}
                pergunta="Quem é o maior Brasileiro da história?"
                resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                aberta={ativo === 2}
                AlternarVisibilidade={AlternarVisibilidade}
            />
            <Pergunta
                indice={3}
                pergunta="Lula é Ladrão?"
                resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                aberta={ativo === 3}
                AlternarVisibilidade={AlternarVisibilidade}
            />
        </div>
    );
}
