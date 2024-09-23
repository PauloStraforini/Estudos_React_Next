interface IfElseProps{
    teste: boolean
    childrean: any
}

export default function If(props: IfElseProps) {
    if (props.teste) {
        return props.childrean[0]
    } else {
        return props.childrean[1]
    }
}