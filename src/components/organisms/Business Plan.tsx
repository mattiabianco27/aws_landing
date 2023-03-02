import Image from "next/image"
import heroImage from "../../../public/hero.svg"

interface BPProps {
    activitText:string;
    clientText:string;
    partnersText:string;
    CostsRevenueText:string;
    
}

export default function BusinessPlan(props:BPProps) {
    return (
    <div className="flex flex-col items-center">
        <div className="flex text-[40px] font-bold bg-gradient-to-r from-lightblue to-red text-transparent bg-clip-text">Business Plan</div>
        
    </div>
    )
}