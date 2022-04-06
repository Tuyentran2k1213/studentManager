import { useDispatch } from "react-redux";
import svService from "../../AxiosSv";
import { action } from '../../redux';

export default function ItemSv({ data }) {

    const { deleList, loadingProcess, editSv } = action;
    const disPatch = useDispatch();
    const {id, name, email, phone} = data;

    const handlingDele = (idsv) => {
            disPatch(loadingProcess(true));
            svService.deleSv(idsv)
              .then(res => {
                  disPatch(deleList(idsv));
                  disPatch(loadingProcess(false));
              })
              .catch(err => {
                  console.log(err);
              })
    }

    const handleEdit = idStudent => {
        disPatch(editSv(idStudent));
    }

        return (
      <>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
          <button className="btn btn-success mr-2" data-toggle="modal" data-target="#editModal" onClick={() => handleEdit(id)}>edit</button>
          <button className="btn btn-danger" onClick={() => handlingDele(id)}>delete</button>
      </td>
      </>
    )
}