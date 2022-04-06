import Dssv from "./Dssv"
import LoadingAnimation from "./LoadingAnimation"
import { ModalSv, ModalEdit } from "./Modal"
import { useSelector } from "react-redux";

export default function QLSV() {

    const load = useSelector(state => state.reducer.loadingApi);

    return (
        <div className='container'>
            <ModalSv className='my-5'/>
            <ModalEdit/>
            <Dssv/>
            { load && <LoadingAnimation/> }
        </div>
    )
}