import svService from "../../AxiosSv";
import { action } from "../../redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function DeleBtn({id, className}) {

    const history = useHistory();
    const disPatch = useDispatch();
    const { loadingProcess, deleList } = action;
    
    const handlingDele = (idsv) => {
        disPatch(loadingProcess(true));
        svService.deleSv(idsv)
          .then(res => {
              disPatch(deleList(idsv));
              disPatch(loadingProcess(false));
              history.replace('/qlsv');
          })
          .catch(err => {
              console.log(err);
          })

}

    return (
        <>
        <button className={`btn btn-danger ${className}`} onClick={() => handlingDele(id)}
        >delete</button>
        </>
    )
}