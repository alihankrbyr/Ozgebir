
import AddButton from "../../components/AddButton/AddButton.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTrashAlt,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import "./Shuttles.css";
import React from "react";
import { useHistory } from "react-router";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";
import Pagination from "components/Pagination/Pagi";
import { FetchShuttles } from "app/redux/actions/ShuttlesActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
function Shuttles() {
  const shuttles = useSelector(
    (state) => state.allShuttles.shuttles
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchShuttles());
  }, []);


  const ShuttlesList = shuttles;
  const history = useHistory();

  const AddShuttles = () => {
    history.push("/admin/servisler");
  };


  const EditShuttles = () => {
    history.push("/admin/Servisler_ekle");
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4" className="CardTitle">
                  Servis Listesi
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table striped responsive>
                  <thead className="text-top">
                    <tr>
                      <th className="text-number" style={{ width: "2%" }}>
                        #
                      </th> <th className="video-title">
                        Plaka
                        <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th className="video-title">
                        Şehir
                        <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th className="video-title">
                        Bölge
                        <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th className="video-title">
                        Kalkış Saati <FontAwesomeIcon icon={faSort} />
                      </th>

                      <th style={{ width: "40%" }}></th>

                    </tr>
                  </thead>
                  <tbody>
                    {ShuttlesList.map((item) => (
                      <tr>
                        <td className="text-number">{item.id}</td>

                        <td>{item.plate}</td>
                        <td>{item.arrive_city}</td>
                        <td>{item.arrive_district}</td>
                        <td>{item.departure_time}</td>
                        <td className="text-right">
                          <Button className="button-all" onClick={EditShuttles}>
                            <FontAwesomeIcon icon={faPencilAlt} />
                            Düzenle
                          </Button>
                        </td>
                        <td className="text-left">
                          <Button className="ShuttlesDelete">
                            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
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

        <Row className="ServicePagination">
          <Pagination />
        </Row>
        <Row className="bottom-row">
          <AddButton onClick={AddShuttles} />
        </Row>
      </div>
    </>
  );
}

export default Shuttles;
