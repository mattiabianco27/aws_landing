interface ClientsProps {
    text: string;
}
export default function Clients(props:ClientsProps) {
    return (
        <div>
            <p>{props.text}</p>
            <br /><br />
        </div>
    )
}
