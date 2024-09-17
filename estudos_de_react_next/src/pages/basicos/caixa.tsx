import Caixa from "@/components/basicos/Caixa";

export default function PaginaCaixa() {
    return(
        <div className="flex gap-5 p-7">
            <Caixa>1</Caixa>
            <Caixa>2</Caixa>
            <Caixa>3</Caixa>
            <Caixa><ul className="list-disc">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                </ul></Caixa>
        </div>
    )
}