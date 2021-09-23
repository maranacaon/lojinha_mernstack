import {BackdropContainer} from "./Styles"

export default function Backdrop({show, click}) {
    return show && (
        <BackdropContainer onClick={click}/>
    )
}
