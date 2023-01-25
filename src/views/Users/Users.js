import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Row,
  Button,
} from "reactstrap";
import "./users.css";
import "../MediaPool/MediaPool.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTrashAlt,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import Pagi from "components/Pagination/Pagi";
import AddButton from "../../components/AddButton/AddButton.js";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "app/redux/actions/UsersActions";
import { useDispatch } from "react-redux";
import { deleteUsers } from "app/redux/actions/UsersActions";

const Users = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Emin Misin ? ")) {
      dispatch(deleteUsers(id));
    }
  };

  let number = 0;

  const history = useHistory();

  const EditUser = () => {
    history.push("/admin/kullanicilar_ekle");
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle className="CardTitle">Kullanıcı Listesi</CardTitle>

                {/* Filtreleme Butonları */}

                <div className="filterButtonsMain">
                  <button className="filterButtonsYonetici">YÖNETİCİ</button>
                  <button className="filterButtonsEgitmen">EĞİTMEN</button>
                  <button className="filterButtonsOperasyon">OPERASYON</button>
                  <button className="filterButtonsOgrenci">ÖĞRENCİ</button>
                </div>
              </CardHeader>

              <CardBody>
                <Table responsive striped>
                  <thead className="text-top">
                    <tr>
                      <th>#</th>
                      <th width="20%" style={{ cursor: "pointer" }}>
                        Ad Soyad&nbsp;
                        <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th width="20%" style={{ cursor: "pointer" }}>
                        Kullanıcı Tipi&nbsp; <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th width="20%">Telefon No</th>

                      <th width="20%">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.users.map((user) => (
                      <tr className="row-height">
                        <td className="text-number">{(number += 1)}</td>

                        <td className="video-title">
                          {user.first_name}&nbsp;
                          {user.last_name}
                        </td>
                        <td className="video-title">{user.role}</td>
                        <td className="video-title">{user.phone_1}</td>
                        <td className="video-title">{user.email}</td>

                        <td className="text-right">
                          <Button className="btn-Edit" onClick={EditUser}>
                            <i className="fas fa-pencil-alt" />
                            Düzenle
                          </Button>
                        </td>

                        <td className="text-left">
                          <Button
                            className="btn-Delete"
                            onClick={() => handleDelete(user.id)}
                          >
                            <i className="fas fa-trash-alt" />
                            Sil
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Col className="col-12">
          <Pagi />
        </Col>
        <Row className="bottom-row">
          {/* <Button className="add-videoButton" onClick={MediaPoolAdd}>
              <i className="fas fa-plus" />
              <br />
              Video
              <br />
              Ekle
            </Button> */}
          <AddButton />
        </Row>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.allUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
