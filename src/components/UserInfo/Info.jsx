import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setName,
  setLastname,
  setAddress,
  setPhone,
} from "../../redux/actions/userActions";
import styles from "./Info.module.css";

const Info = ({
  lastname,
  name,
  address,
  phone,
  setName,
  setLastname,
  setAddress,
  setPhone,
}) => {
  const navigate = useNavigate();
  const changeHandler = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const changeLastNameHandler = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };

  const changePhoneHandler = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const changeAddressHandler = (e) => {
    const address = e.target.value;
    setAddress(address);
  };

  return (
    <div class="container">
      <div className="row">
        <div className="col-6">
          <h3>Actualizar Información de Administrador</h3>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Nombre
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={changeHandler}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Apellido
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={changeLastNameHandler}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Dirección
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={changeAddressHandler}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Teléfono
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={changePhoneHandler}
            />
          </div>
        </div>
      </div>
      <div class="row">
        <hr />
        <div class="col-6">
          <div class="well well-sm">
            <div class="row">
              <h4>Prevista de Contacto</h4>
              <div class="col-6">
                <h4>
                  {name} {lastname}
                </h4>
                <small>
                  <cite title={address}>
                    {address}
                    <i class="glyphicon glyphicon-map-marker"></i>
                  </cite>
                </small>
                <p>
                  <i class="glyphicon glyphicon-envelope"></i>
                  {phone}
                  <br />
                  <i class="glyphicon glyphicon-globe"></i>
                  <a href="">www.paseoliberia.com</a>
                  <br />
                  <i class="glyphicon glyphicon-gift"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button onClick={() => navigate(-1)} className="btn btn-primary">
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

//export default Info
const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    lastname: state.user.lastname,
    address: state.user.address,
    phone: state.user.phone,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch(setName(name)),
    setLastname: (lastname) => dispatch(setLastname(lastname)),
    setAddress: (address) => dispatch(setAddress(address)),
    setPhone: (phone) => dispatch(setPhone(phone)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
