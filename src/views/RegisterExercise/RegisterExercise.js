import React from "react";
// reactstrap components
import {
  Button,
  CardTitle,
  Card,
  CardHeader,
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";
import Pagi from "components/Pagination/Pagi";
import AddButton from "../../components/AddButton/AddButton.js";
// import { Tooltip } from "reactstrap";

import "./RegisterExercise.css";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function RegisterExercise() {
  const history = useHistory();

  // const [tooltipOpen, setTooltipOpen] = useState(false);

  // const toggle = () => setTooltipOpen(!tooltipOpen);

  const EditExercises = () => {
    history.push("/admin/egzersiz_atama");
  };

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4" className="CardTitle">
                Egzersizler
              </CardTitle>
            </CardHeader>
            <CardBody>
              <Table striped responsive className="exercises-table">
                <thead className="text-top">
                  <tr>
                    <th>#</th>
                    <th>
                      Egzersiz Adi <i className="fas fa-sort" />{" "}
                    </th>
                    <th>
                      Bolum <i className="fas fa-sort" />{" "}
                    </th>
                    <th className="space-td"></th>
                    <th>
                      Doktor Adi <i className="fas fa-sort" />{" "}
                    </th>
                    <th>
                      Hasta Adi <i className="fas fa-sort" />{" "}
                    </th>
                    <th>Video</th>
                  </tr>
                </thead>

                <tbody>
                  {/* start of the first row */}
                  <tr className="row-height">
                    <th className="text-number">1</th>
                    <td className="video-title">Lorem ipsum dolor sit</td>
                    <td
                      className="video-explanation"
                      title="Lorem ipsum dolor sit amet,consecteur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua."
                    >
                      {`Lorem ipsum dolor sit amet,consecteur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.`.substring(0, 120)}

                      {/* <Tooltip
                        placement="top"
                        isOpen={tooltipOpen}
                        autohide={false}
                        target="DisabledAutoHideExample"
                        toggle={toggle}
                      ></Tooltip> */}
                    </td>
                    <td className="space-td" />
                    <td className="attending-physicians-name">Lorem ipsum</td>
                    <td className="patients-name">Lorem ipsum</td>
                    <td>
                      <Button className="btn-watch">
                        <i className="fas fa-play-circle" />
                        Izle
                      </Button>
                    </td>
                    {/* <td className="space-td" /> */}
                    <td className="text-right">
                      <Button className="btn-edit" onClick={EditExercises}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                        Duzenle
                      </Button>
                    </td>
                    <td className="text-left">
                      <Button className="btn-delete">
                        <i className="fas fa-trash-alt" />
                        Sil
                      </Button>
                    </td>
                  </tr>
                  {/* end of first row */}
                  <tr className="row-height">
                    <th className="text-number">2</th>
                    <td className="video-title">Lorem ipsum dolor sit</td>
                    <td
                      className="video-explanation"
                      title="Lorem ipsum dolor sit amet,consecteur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua."
                    >
                      {`Lorem ipsum dolor sit amet,consecteur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.`.substring(0, 120)}

                      {/* <Tooltip
                        placement="top"
                        isOpen={tooltipOpen}
                        autohide={false}
                        target="DisabledAutoHideExample"
                        toggle={toggle}
                      >
                        
                      </Tooltip> */}
                    </td>
                    <td className="space-td" />
                    <td className="attending-physicians-name">Lorem ipsum</td>
                    <td className="patients-name">Lorem ipsum</td>
                    <td>
                      <Button className="btn-watch">
                        <i className="fas fa-play-circle" />
                        Izle
                      </Button>
                    </td>
                    {/* <td className="space-td" /> */}
                    <td className="text-right">
                      <Button className="btn-edit" onClick={EditExercises}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                        Duzenle
                      </Button>
                    </td>
                    <td className="text-left">
                      <Button className="btn-delete">
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
      <center>
        <Pagi />
      </center>
      <Row className="bottom-row">
        <AddButton />
      </Row>
    </div>
  );
}

export default RegisterExercise;
