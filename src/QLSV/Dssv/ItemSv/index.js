import { DetailBtn, DeleBtn, EditBtn } from "../../Component";


export default function ItemSv({ data }) {

    const {id, name, email, phone} = data;

        return (
      <>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
          <EditBtn id={id}/>
          <DeleBtn id={id}/>
          <DetailBtn id={id}/>
      </td>
      </>
    )
}