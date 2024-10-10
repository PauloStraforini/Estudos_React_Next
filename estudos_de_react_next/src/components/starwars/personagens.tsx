export default function Personagens() {

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
        console.log('Início da função obterPersonagens')
        await SimularCamadaAPI()
        console.log('Fim da função obterPersonagens')
    }

    return (
        <div className={`flex justify-center items-center h-screen`}>
            <h1 className="text-3xl text-center">Personagens</h1>
            <button onClick={obterPersonagens} className={`
                bg-blue-500 p-2`}>obter</button>
        </div>
    )
} 