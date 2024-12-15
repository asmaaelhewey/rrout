import poert1 from "../../assets/imgs/img.png"
import poert2 from "../../assets/imgs/pic.png"
import poert3 from "../../assets/imgs/port.png"

export default function Bortfolio() {
    return <>
 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img className="h-auto max-w-full rounded-lg" src={poert1} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={poert2} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={poert3} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={poert3} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={poert1} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={poert2}  alt=""/>
    </div>
</div>

    </>
}