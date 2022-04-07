import { useDispatch } from "react-redux";
import { action } from "../../redux";

export default function EditBtn({id, className}) {

    const disPatch = useDispatch();
    const { editSv } = action;

    const handleEdit = idStudent => {
        disPatch(editSv(idStudent));
    }

    return (
        <>
        <button className={`btn btn-success mr-1 ${className}`} data-toggle="modal" data-target="#editModal" onClick={() => handleEdit(id)}>edit</button>
        </>
    )
}