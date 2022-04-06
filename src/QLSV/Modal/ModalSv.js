import { FaPhone, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useRef } from "react";
import { action } from "../redux";
import { useDispatch } from "react-redux";
import svService from "../AxiosSv";
import { useForm } from "react-hook-form";

export default function ModalSv({ className }) {
  const btnClose = useRef();

  const { addToList, loadingProcess } = action;
  const dispatch = useDispatch();

  // set up form library
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const subMit = (data) => {

    dispatch(loadingProcess(true));
    btnClose.current.click();

    //call add sv api
    svService
      .addSv(data)
      .then(res => {
        dispatch(addToList(res.data));
        dispatch(loadingProcess(false));
        reset({
          name: '',
          email: '',
          phone: ''
        })
      })
      .catch(err => {
        console.log(err);
      })
  };

  // const [inf, setInf] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  // });

  // const handleChanging = e => {
  //   const {name, value} = e.target;
  //   setInf(prevInf => ({
  //     ...prevInf,
  //     [name]: value,
  //   }));
  //   console.log(inf);
  // }

  //handle when submit form
  // const handleSubmit = e => {
  //   // prevent submit default in form
  //   e.preventDefault();

  //   // close when submit
  //   btnClose.current.click();

  //   // call api add form on database
  //   if(inf.name !== '' && inf.email !== '' && inf.phone !== ''){
  //     dispatch(loadingProcess(true));
  //   svService
  //     .addSv(inf)
  //     .then(res => {
  //         dispatch(loadingProcess(false));
  //         dispatch(addToList(res.data));
  //       setInf({
  //         name: '',
  //         email: '',
  //         phone: '',
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  //   }

  // }

  return (
    <form className={`${className}`} onSubmit={handleSubmit(subMit)}>
      {/* Button trigger modal */}
      <div className="position-fixed bg-white container py-3" style={{
        top: 0,
      }}>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add student
      </button>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add more student
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">

              {/* this for name input form  */}
              <div className="d-flex flex-column mb-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      Name
                    </span>
                  </div>
                  <input

                    style={{
                      border: !!errors.name && "solid 2px red",
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    name="name"
                    aria-describedby="basic-addon1"
                    {...register("name", {
                      required: true,
                      minLength: 4,
                      maxLength: 20,
                    })}
                  />
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <FaUserAlt />
                    </span>
                  </div>
                </div>

                {/* print invalid error */}
                <span className="text-danger mt-0">
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
                </span>
              </div>

                {/* this is email input form  */}
              <div className="d-flex flex-column mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Email
                  </span>
                </div>
                <input
                  style={{
                    border: !!errors.email && "solid 2px red",
                  }}
                  type="text"
                  className="form-control"
                  placeholder="user email"
                  aria-label="Username"
                  name="email"
                  aria-describedby="basic-addon1"
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    minLength: 4,
                  })}
                />
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <MdEmail />
                  </span>
                </div>
              </div>

              {/* print invalid error */}
              <span className="text-danger mt-0">
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
                </span>
              </div>

              {/* this for phone input group */}
              <div className="d-flex flex-column mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Phone
                  </span>
                </div>
                <input
                style={{
                  border: !!errors.phone && 'solid 2px red'
                }}
                  type="text"
                  className="form-control"
                  placeholder="phone number"
                  aria-label="Username"
                  name="phone"
                  aria-describedby="basic-addon1"
                  {...register("phone", {
                  required: true,
                   maxLength: 15,
                   minLength: 8,
                   pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
                  })}
                />
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <FaPhone />
                  </span>
                </div>
              </div>

              {/* print invalid error phone*/}
              <span className="text-danger mt-0">
                  {errors.phone && `Please enter correct your phone's number`}
                </span>
              </div>
              
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                ref={btnClose}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
