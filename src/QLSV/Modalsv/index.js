import { FaPhone, FaUserAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useState, useRef } from 'react'
import { action } from '../redux';
import { useDispatch } from 'react-redux';
import svService from '../AxiosSv';

export default function ModalSv({className}) {

  const btnClose = useRef();

  const { addToList, loadingProcess } = action;
  const dispatch = useDispatch();

  
  const [inf, setInf] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setInf(prevInf => ({
      ...prevInf,
      [name]: value,
    }));
  }

  //handle when submit form
  const handleSubmit = e => {
    // prevent submit default in form 
    e.preventDefault();

    // close when submit 
    btnClose.current.click();

    // call api add form on database
    if(inf.name !== '' && inf.email !== '' && inf.phone !== ''){
      dispatch(loadingProcess(true));
    svService
      .addSv(inf)
      .then(res => {
          dispatch(loadingProcess(false));
          dispatch(addToList(res.data));
        setInf({
          name: '',
          email: '',
          phone: '',
        })
      })
      .catch(err => {
        console.log(err);
      })
    }

  }

    return (
        <form className={`${className}`} onSubmit={handleSubmit}>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Add student
  </button>
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">

        <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">Name</span>
  </div>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" name='name' aria-describedby="basic-addon1" value={inf.name} onChange={handleChange} />
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1"><FaUserAlt/></span>
  </div>
</div>

        <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">Email</span>
  </div>
  <input type="text" className="form-control" placeholder="user email" aria-label="Username" name='email' aria-describedby="basic-addon1" value={inf.email} onChange={handleChange} />
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1"><MdEmail/></span>
  </div>
</div>

        <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">Phone</span>
  </div>
  <input type="number" className="form-control" placeholder="phone number" aria-label="Username" name='phone' aria-describedby="basic-addon1" value={inf.phone} onChange={handleChange} />
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1"><FaPhone/></span>
  </div>
</div>

        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal" ref={btnClose}>Close</button>
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  </div>
</form>

    )
}