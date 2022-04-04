import Dssv from "./Dssv"
import LoadingAnimation from "./LoadingAnimation"
import ModalSv from "./Modalsv"
import { useSelector } from "react-redux";

export default function QLSV() {

    const load = useSelector(state => state.reducer.loadingApi);

    return (
        <div className='container'>
            { load && <LoadingAnimation/> }
            <ModalSv className='my-5'/>
            <Dssv/>
        </div>
    )
}