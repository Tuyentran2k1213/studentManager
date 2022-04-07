import { Link } from "react-router-dom"

export default function DetailBtn({id}) {
    return (
        <>
        <Link to={`detail/${id}`}><button className="btn btn-info ml-1">detail</button></Link>
        </>
    )
}