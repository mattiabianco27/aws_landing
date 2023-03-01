
interface ActivitiesProps {
    text: string;
}
export default function Activities(props:ActivitiesProps) {
    return (
        <div className="flex flex-col">
            <div className="text-xl antialised">Ciò che il cliente <u>sta cercando</u></div>
            <p>{props.text}</p>
            <br /><br />
        </div>
    )
}