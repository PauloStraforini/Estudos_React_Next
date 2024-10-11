import Background from "@/components/starwars/background";
import Personagens from "@/components/starwars/personagens";
import useStarWars from "@/hooks/useStarWars";

export default function PaginaStarWars() {
    const { processando, personagens, obterPersonagens } = useStarWars();

    return (
        <div className={`flex justify-center items-center h-screen`}>
            <Background />
            <Personagens />
        </div>
    )
}