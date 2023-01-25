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
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "../MediaPool/MediaPool.css";
import Pagi from "components/Pagination/Pagi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import AddButton from "components/AddButton/AddButton";
import { FetchAppointments } from "app/redux/actions/AppointmentActions";

function Appointments() {
  const appointments = useSelector(
    (state) => state.allAppointments.appointments
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchAppointments());
  }, []);

  const appointmentsList = appointments;
  const history = useHistory();
  //When I click the add or edit appointment button, these function works and redirect to new page.
  const AddAppointment = () => {
    history.push("/admin/randevular");
  };
  const EditAppointment = () => {
    history.push("/admin/randevular_ekle");
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            {/* I added card for integrate the table */}
            <Card>
              <CardHeader>
                <CardTitle tag="h4" className="CardTitle">
                  Randevu Listesi
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead className="text-top">
                    <tr>
                      {/* I specify the width of the columns in the table */}
                      <th>#</th>
                      <th>
                        Bölüm <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th>
                        Doktor <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th>
                        ÖĞrenci <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th>
                        Tarih <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th>
                        Saat <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th width="30%">
                        Açıklama <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th> </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointmentsList.map((item) => (
                      <tr className="row-height">
                        <td className="text-number">{item.id}</td>
                        <td className="video-title">{item.category}</td>
                        <td className="video-title">{item.doctor_id}</td>
                        <td className="video-title">{item.user_id}</td>
                        <td className="video-title">{item.appointment_date}</td>
                        <td className="video-title">{item.appointment_time}</td>
                        <td
                          className="video-explanation"
                          title={item.description}
                        >
                          {item.description.substring(0, 120)}
                        </td>
                        <td className="space-td"></td>
                        <td className="text-right">
                          <Button
                            className="btn-Edit"
                            onClick={EditAppointment}
                          >
                            <i className="fas fa-pencil-alt" />
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
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="pagination-row">
          <Col
            className="col-12"
            style={{ justifyContent: "center", display: "flex" }}
          >
            <Pagi />
          </Col>
          <Row className="bottom-row">
            {/* I added a row that includes 'add appointment' button */}
            <AddButton onClick={AddAppointment} />
          </Row>
        </Row>
      </div>
    </>
  );
}
export default Appointments;
