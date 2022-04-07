import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import svService from '../QLSV/AxiosSv';
import ReactLoading from 'react-loading'
import './detail.scss';
import { DeleBtn, EditBtn } from '../QLSV/Component'

export default function Detail() {

    const params = useParams();
    const [detail, setDetail] = useState({});
    const [Load, setLoad] = useState(true);

    useEffect(() => {
        svService
            .detailSv(params.id)
            .then(res => {
                setDetail(res.data);
                setLoad(false);
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    const { id, name, email, phone, image } = detail;

    return (
        <>
        <div className='detail container d-flex justify-content-center align-items-center' style={{
            height: '100vh'
        }}>
            {Load ? (<ReactLoading type={'balls'} color={'#ff00a2'} height={'200px'} width={'220px'} />) : (
                <>
                <div className="card mb-3" style={{width: 800}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img className='w-100' src={image} alt="kakakaka" />
    </div>
    <div className="col-md-8" style={{fontSize: 20}}>
      <div className="card-body h-100 d-flex flex-column justify-content-between">
        <h5 className="card-title"><b>Name:</b> {name}</h5>
        <p className="card-text"><b>Email:</b> {email}</p>
        <p className="card-text"><b>Phone:</b> {phone}</p>
        <div className="card-text d-flex justify-content-between">
            <small className="text-muted"><b>Id:</b> {id}</small>
            <div>
                <EditBtn id={id}/>
                <DeleBtn id={id}/>
            </div>
            </div>
      </div>
    </div>
  </div>
</div>
                </>
            )
            }

        </div>

        </>
    )
}