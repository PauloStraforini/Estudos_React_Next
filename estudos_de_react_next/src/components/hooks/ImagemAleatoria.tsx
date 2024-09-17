import Image from "next/image"

export default function ImagemAleatoria (){
    let pesquisa: string = ''
    const url = 'https://source.unsplash.com/featured/300x300?'

    function urlImagem() {
        return `${url}${pesquisa}`
    }

    function redenrizarBotao(valor: string) {
        return(
            <button className={`bg-red-600 h-28 w-60 rounded-md gap-5
            justify-center items-center font-light text-4xl 
            `} onClick={() => {
                pesquisa = valor
                console.log(urlImagem())
            }}>
                {valor}
            </button>
        )
    }

    return(
        <div className={'flex flex-col border-yellow-500 g-5 p-7'}>
            {/* {<Image src={urlImagem()} height={200} width={200} alt="Imagem"/>} */}
            <div className="flex gap-5">
                {redenrizarBotao('abstract')}
                {redenrizarBotao('city')}
                {redenrizarBotao('person')}
            </div>
        </div>
    )
}
