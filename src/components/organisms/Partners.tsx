// colllaborazione tra chi elabora i dati e un'agenzia di pubblicità per fare in modo che i singoli negozi locali abbiano pubblicitò morata al singolo cliente

interface PartnersProps {
    text: string;
}
export default function Partners(props:PartnersProps) {
    return (
        <div>
            <div className="text-xl antialised">Pubblicità <u>mirata</u></div>
            <p>{props.text}</p>
            <br /><br />
        </div>
    )
}