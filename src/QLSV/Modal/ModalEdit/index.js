import './index.scss';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import svService from '../../AxiosSv';
import { updateSv, loadingProcess } from '../../redux/action';

export default function ModalEdit() {

  const dataSv = useSelector(state => state.reducer.editStudent);
  const dispatch = useDispatch()
  const closeBtn = useRef();

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const subMit = data => {

    dispatch(loadingProcess(true));
    closeBtn.current.click();

    svService
      .updateSv(data.id, data)
      .then(res => {
        dispatch(loadingProcess(false));
        dispatch(updateSv(res.data));
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    const {id, email, name, phone} = dataSv;
    reset({
      id: id,
      name: name,
      email: email,
      phone: phone,
    })
  }, [dataSv]);

    return (
       <>
        <div className="modalForm">
  {/* Button trigger modal */}
  {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#editModal">
    Launch demo modal
  </button> */}
  {/* Modal */}
  <form onSubmit={handleSubmit(subMit)} className="modal fade" id="editModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title" id="exampleModalLabel"> <h3 id="logo">Edit student</h3></div>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          {/* modal processing here  */}      

  <label>Id</label>
  <input type="text" name="id" disabled
  {...register('id')}
  />

  {/* input name  */}
  <div>
  <label className='inputGroup' htmlFor="username">Name</label>
  <input type="text" id="username" name="name" placeholder="Type in your username.."
  style={{
    border: !!errors.name && "solid 2px red",
  }}
  {...register("name", {
    required: true,
    minLength: 4,
    maxLength: 20,
  })}
  />
  <label className='text-danger error'>
  {(() => {
                    switch (errors.name?.type) {
                      case "required":
                        return "You must type your name here";
                      case "minLength":
                        return "Your name should be from 4 to 20 words";
                      case "maxLength":
                        return "Your name should be from 4 to 20 words";
                      default:
                        return "";
                    }
                  })()}
  </label>
  </div>

  {/* input email  */}
  <div>
  <label className='inputGroup' htmlFor="email">Email</label>
  <input type="text" id="email" name="email" placeholder="Enter your email.."
  style={{
    border: !!errors.email && "solid 2px red",
  }}
  {...register("email", {
    required: true,
    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    minLength: 4,
  })}
  />
  <label className='text-danger error'>
  {(() => {
                    switch (errors.email?.type) {
                      case "required":
                        return "You must enter your email here";
                      case "pattern":
                        return "Your email is invalid";
                      default:
                        return "";
                    }
                  })()}
  </label>
  </div>

{/* input phone  */}
  <div>
  <label className='inputGroup' htmlFor="phone">Phone</label>
  <input type="text" id="phone" name="phone" placeholder="Enter your phone number.."
  style={{
    border: !!errors.phone && "solid 2px red",
  }}
  {...register("phone", {
    required: true,
     maxLength: 15,
     minLength: 8,
     pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    })}
  />
  <label className='text-danger error'>
  {errors.phone && `Please enter correct your phone's number`}
  </label>
  </div>

          {/* done process modal  */}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal" ref={closeBtn}>Close</button>
          <button type="submit" className="btn btn-info">Update student</button>
        </div>
      </div>
    </div>
  </form>
</div>

       </>
    )
}