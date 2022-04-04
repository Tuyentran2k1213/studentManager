import { GoSettings } from 'react-icons/go';
import ItemSv from './ItemSv'
import { useEffect, useState } from 'react';
import { action } from '../redux';
import { useDispatch, useSelector } from 'react-redux';
import svService from '../AxiosSv';
import ReactLoading from 'react-loading';

export default function Dssv() {

    const [load, setLoad] = useState(true);

    const disPatch = useDispatch();
    const { getListSv } = action;
    const dataSv = useSelector(state => state.reducer.listStudent);

    useEffect(() => {
        svService
            .getSv()
            .then(res => {
                // console.log(res);
            disPatch(getListSv(res.data));
            setLoad(false);
        })
            .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <table className="table text-center">
  <thead className='table-dark'>
    <tr>
      <th>Id</th>
      <th>Tên</th>
      <th>Email</th>
      <th>Phone num</th>
      <th><GoSettings/></th>
    </tr>
  </thead>
  <tbody>
      {load ? (
          <tr>
          <td colSpan='5'>
          <ReactLoading className='mx-auto mt-5' type={'spin'} color={'green'} height={100} width={100} />
          </td>
          </tr>
      ) : (
              dataSv.map(sv => (
          <tr key={sv.id}>
              <ItemSv data={sv}/>
          </tr>
      ))
      )}
      </tbody>
</table>

    )
}