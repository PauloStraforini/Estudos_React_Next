import Personagens from "@/components/starwars/personagens";

export default function PaginaStarWars() {

    return (
        <div className={`flex justify-center items-center h-screen`}>
            <Personagens />
        </div>
    )
}