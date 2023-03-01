import Image from "next/image"
import heroImage from "../../../public/hero.svg"

export default function Hero() {
    return (
    <div className="flex flex-col py-[100px] px-[50px] items-center">
        <div className="flex text-4xl text-center antialised">Titolo.</div>
        <div className="flex text-5xl mt-[20px] text-center antiali">Sottotitolo.</div>
        <Image src={heroImage} alt={"schermo smartphone con demo"} className="mt-[70px] w-[200px]"/>
    </div>
    )
}