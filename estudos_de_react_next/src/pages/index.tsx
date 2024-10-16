import Caixa from "@/components/basicos/Caixa";
import Circulo from "@/components/basicos/Circulo";
import Evento from "@/components/basicos/Evento";
import Primeiro from "@/components/basicos/Primeiro";

export default function Home() {
  return(

<div className={`flex flex-col h-screen justify-center items-center`}>

  <Caixa/>
  <Evento/>
  <Primeiro/>

</div>
)
}