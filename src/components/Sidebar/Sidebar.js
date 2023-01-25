import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "../../assets/img/ozgebir.png";
import "./Sidebar.css";
//  github push test (bidaha)
var ps;

function Sidebar(props) {
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  // const activeRoute = (routeName) => {
  //   return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  // };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div className="sidebar" data-color="white" data-active-color="black">
      <div className="logo">
        <a className="simple-text logo-mini">
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a>
        <a className="simple-text logo-normal">ÖZGEBİR</a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {/* {props.routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className="nav-link m-1"
                  activeClassName="active"
                >
                  <i className={prop.icon} />
                  <p className="m-1">{prop.name}</p>
                </NavLink>
              </li>
            );
          })} */}

          {/* changed the contents of sidebar to hardcoded instead of mapping from routes.js 
          as we decided to add every page to routes.js -Fatih */}

          {/* <li className={activeRoute(prop.path)} key={key}>
            <NavLink
              to={prop.layout + prop.path}
              className="nav-link m-1"
              activeClassName="active"
            >
              <i className={prop.icon} />
              <p className="m-1">{prop.name}</p>
            </NavLink>
          </li> */}
          <li className="list-structure" activeClassName="active">
            <NavLink
              to="/admin/anasayfa"
              className="nav-link m-1"
              activeClassName="active"
            >
              <i className="fas fa-home" />
              <p className="m-1">Anasayfa</p>
            </NavLink>
          </li>
          <li className="list-structure">
            <NavLink
              to="/admin/kullanicilar"
              className="nav-link m-1"
              activeClassName="active"
            >
              <i className="fas fa-users" />
              <p className="m-1">Kullanicilar</p>
            </NavLink>
          </li>
          <li className="list-structure">
            <NavLink
              to="/admin/randevular"
              className="nav-link m-1"
              activeClassName="active"
            >
              <i className="far fa-calendar-check" />
              <p className="m-1">Randevular</p>
            </NavLink>
          </li>
          <li className="list-structure">
            <NavLink
              to="/admin/egzersizler"
              className="nav-link m-1"
              activeClassName="active"
            >
              <i className="fas fa-walking" />
              <p className="m-1">Egzersizler</p>
            </NavLink>
          </li>
          <li className="list-structure">
            <NavLink
              to="/admin/egzersiz_atama"
              className="nav-link m-1"
              activeClassName="active"
            >
              <i className="fas fa-plus" />
              <p className="m-1">Egzersiz Atama</p>
            </NavLink>
          </li>
          <li className="list-structure">
            <NavLink
              to="/admin/medya_havuzu"
              className="nav-link m-1"
              activeClassName="active"
            >
              <i className="fas fa-video" />
              <p className="m-1">Medya Havuzu</p>
            </NavLink>
          </li>
          <li className="list-structure">
            <NavLink
              to="/admin/soru_havuzu"
              className="nav-link m-1"
              activeClassName="active"
            >
              <i className="fas fa-question-circle" />
              <p className="m-1">Soru Havuzu</p>
            </NavLink>
          </li>
          <li className="list-structure">
            <NavLink
              to="/admin/etkinlik_havuzu"
              className="nav-link m-1"
              activeClassName="active"
            >
              <i className="fas fa-check-square" />
              <p className="m-1">Etkinlik Havuzu</p>
            </NavLink>
          </li>
          <li className="list-structure">
            <NavLink
              to="/admin/etkinlik_atama"
              className="nav-link m-1"
              activeClassName="active"
            >
              <i className="fas fa-plus" />
              <p className="m-1">Etkinlik Atama</p>
            </NavLink>
          </li>
          <li className="list-structure">
            <NavLink
              to="/admin/cihazlar_ve_oneriler"
              className="nav-link m-1"
              activeClassName="active"
            >
              <i className="fas fa-toolbox" />
              <p className="m-1">Cihazlar ve Oneriler</p>
            </NavLink>
          </li>
          <li className="list-structure">
            <NavLink
              to="/admin/servisler"
              className="nav-link m-1"
              activeClassName="active"
            >
              <i className="fas fa-shuttle-van" />
              <p className="m-1">Servisler</p>
            </NavLink>
          </li>
          <li className="list-structure">
            <NavLink
              to="/admin/sss"
              className="nav-link m-1"
              activeClassName="active"
            >
              <i className="fas fa-question-circle" />
              <p className="m-1">Sikca Sorulan Sorular</p>
            </NavLink>
          </li>
          <li className="list-structure">
            <NavLink
              to="/admin/iletisim"
              className="nav-link m-1"
              activeClassName="active"
            >
              <i className="fas fa-address-card" />
              <p className="m-1">Iletisim</p>
            </NavLink>
          </li>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
