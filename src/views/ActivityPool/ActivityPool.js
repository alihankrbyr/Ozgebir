import { Button } from "reactstrap";
import React from "react";
import { useHistory } from "react-router";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import "../MediaPool/MediaPool.css";
import AddButton from "../../components/AddButton/AddButton.js";
import ModalV from "components/VideoModal/videoModal.js";
import Pagination from "../../components/Pagination/Pagi.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
function ActivityPool() {
  const history = useHistory();

  const redirectToActivityPoolEdit = () => {
    history.push("/admin/etkinlik_havuzu_duzenle");
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4" className="CardTitle">
                  Etkinlik Havuzu
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table striped responsive>
                  <thead className="text-top">
                    <tr>
                      <th>#</th>
                      <th width="12%">
                        Etkinlik Başlığı <i className="fas fa-sort" />{" "}
                      </th>
                      <th width="48%">Açıklama</th>
                      <th></th>
                      <th>Video</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="row-height">
                      <th className="text-number">1</th>
                      <td className="video-title">Lorem ipsum dolor sit</td>
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
                        <Button
                          className="btn-Edit"
                          onClick={redirectToActivityPoolEdit}
                        >
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
                      <td className="video-title">Lorem ipsum dolor sit</td>
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
                        <Button
                          className="btn-Edit"
                          onClick={redirectToActivityPoolEdit}
                        >
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
                      <td className="video-title">Lorem ipsum dolor sit</td>
                      <td
                        className="video-explanation"
                        id="1"
                        title="Lorem ipsum dolor sit amet,consecteur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua."
                      >
                        {`Lorem ipsum dolor sit amet,consecteur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.`.substring(0, 100)}
                      </td>
                      <td className="space-td"></td>

                      <td>
                        <ModalV />
                      </td>

                      <td className="space-td"></td>

                      <td className="text-right">
                        <Button
                          className="btn-Edit"
                          onClick={redirectToActivityPoolEdit}
                        >
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
                      <th className="text-number">4</th>
                      <td className="video-title">Lorem ipsum dolor sit</td>
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
                        <Button
                          className="btn-Edit"
                          onClick={redirectToActivityPoolEdit}
                        >
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
            <AddButton />
          </Row>
        </Row>
      </div>
    </>
  );
}

export default ActivityPool;
