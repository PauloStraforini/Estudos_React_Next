import Personagens from "@/components/starwars/personagens";

export default function PaginaStarWars() {

    async function SimularCamadaAPI() {
        return new Promise((resolve) => {
            setTimeout (() => {
                resolve (1)
            },  3000)
        const data = Date.now()
        while (Date.now() < data + 3000) { }
        })
    }

    return (
        <div className={`flex justify-center items-center h-screen`}>
            <Personagens />
        </div>
    )
}