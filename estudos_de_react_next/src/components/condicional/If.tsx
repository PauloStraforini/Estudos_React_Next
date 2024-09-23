interface IfProps{
    teste: boolean
    childrean: any
}

export default function If(props: IfProps) {
    if (props.teste) {
        return props.childrean 
    } else {
        return null
    }
}