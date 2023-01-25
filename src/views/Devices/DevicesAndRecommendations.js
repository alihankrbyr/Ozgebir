import React from "react";
import { useHistory } from "react-router-dom";
import ModalV from "../../components/VideoModal/videoModal.js";
import AddButton from "../../components/AddButton/AddButton.js";
import Pagination from "../../components/Pagination/Pagi.js";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  Button,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import "../MediaPool/MediaPool.css";

function DeviceRecommendation() {
  const history = useHistory();

  const edit = () => {
    let path = `DeviceRecommendationEdit`;
    history.push(path);
  };
  const add = () => {
    let path = `admin/cihazlar_ve_oneriler_ekle`;
    history.push(path);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4" className="CardTitle">
                  Cihaz ve Öneriler Listesi
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table striped responsive>
                  <thead className="text-top">
                    <tr>
                      <th>#</th>
                      <th width="10%">
                        Cihaz Adı <i className="fas fa-sort" />{" "}
                      </th>
                      <th width="50%">Açıklama</th>
                      <th></th>
                      <th>Video</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="row-height">
                      <th className="text-number">1</th>
                      <td className="video-title">Cihaz 1</td>
                      <td
                        className="video-explanation"
                        id="1"
                        title="Lorem ipsum dolor sit amet,consecteur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua."
                      >
                        {`Lorem ipsum dolor sit amet,consecteur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.`.substring(0, 180)}
                      </td>
                      <td className="space-td"></td>

                      <td>
                        <ModalV />
                      </td>

                      <td className="space-td"></td>

                      <td className="text-right">
                        <Button className="btn-Edit" onClick={edit}>
                          <FontAwesomeIcon icon={faPencilAlt} />
                          Düzenle
                        </Button>
                      </td>
                      <td className="text-left">
                        <Button className="btn-Delete">
                          <i className="fas fa-trash-alt" />
                          Sil
                        </Button>
                      </td>
                    </tr>

                    <tr className="row-height">
                      <th className="text-number">2</th>
                      <td className="video-title">Cihaz 2</td>
                      <td
                        className="video-explanation"
                        id="1"
                        title="Lorem ipsum dolor sit amet,consecteur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua."
                      >
                        {`Lorem ipsum dolor sit amet,consecteur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.`.substring(0, 180)}
                      </td>
                      <td className="space-td"></td>

                      <td>
                        <ModalV />
                      </td>

                      <td className="space-td"></td>
                      <td className="text-right">
                        <Button className="btn-Edit" onClick={edit}>
                          <FontAwesomeIcon icon={faPencilAlt} />
                          Düzenle
                        </Button>
                      </td>
                      <td className="text-left">
                        <Button className="btn-Delete">
                          <i className="fas fa-trash-alt" />
                          Sil
                        </Button>
                      </td>
                    </tr>
                    <tr className="row-height">
                      <th className="text-number">3</th>
                      <td className="video-title">Cihaz 3</td>
                      <td
                        className="video-explanation"
                        id="1"
                        title="Lorem ipsum dolor sit amet,consecteur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua."
                      >
                        {`Lorem ipsum dolor sit amet,consecteur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.`.substring(0, 180)}
                      </td>
                      <td className="space-td"></td>

                      <td>
                        <ModalV />
                      </td>
                      <td className="space-td"></td>

                      <td className="text-right">
                        <Button className="btn-Edit" onClick={edit}>
                          <FontAwesomeIcon icon={faPencilAlt} />
                          Düzenle
                        </Button>
                      </td>
                      <td className="text-left">
                        <Button className="btn-Delete">
                          <i className="fas fa-trash-alt" />
                          Sil
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Pagination />
          </Col>
          <Row className="bottom-row">
            <AddButton onClick={add} />
          </Row>
        </Row>
      </div>
    </>
  );
}

export default DeviceRecommendation;
