import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos() {
    return(
        <div className=" flex justify-between items-center gap-16 p-7">
            <Circulo texto="Seloko"/>
            <Circulo texto="Seloko"/>
            <Circulo texto="Seloko"/>
            <Circulo texto="Seloko" quasePerfeito ={true}/>
            <Circulo texto="AInn"/>
        </div>
    )
}