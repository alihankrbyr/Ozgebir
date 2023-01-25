import React from "react";
import "../assets/css/signin.css";
import { useHistory } from "react-router-dom";
import mainimage from "../assets/img/home-img.png";
import formimage from "../assets/img/ozgebir.png";

const Signin = () => {
  const history = useHistory();

  const redirectToHome = () => {
    let path = `admin/anasayfa`;
    history.push(path);
  };

  return (
    <div className="signin-row">
      <div className="signin-column column-img">
        <img className="mainImage" alt="özgebir" src={mainimage} />
      </div>
      <div className="signin-column column-form">
        <div className="formContent">
          <form className="signin-form">
            <div className="formHeader">
              <img className="formImage" alt="özgebir-logo" src={formimage} />
              <h1 className="formH1">ÖZGEBiR</h1>
            </div>
            <input className="formInput" type="text" placeholder="TC No" />
            <input className="formInput" type="password" placeholder="Şifre" />
            <a className="forgotText">ŞİFREMİ UNUTTUM</a>
            <button
              className="formButton"
              onClick={redirectToHome}
              type="submit"
            >
              DEVAM
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
