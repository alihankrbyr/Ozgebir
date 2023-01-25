import { useHistory } from "react-router";
import {
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Form,
  Button,
  Label,
  Input,
} from "reactstrap";
import "./appointment.css";

function AddorEditAppointment() {
  const history = useHistory();
  //When I click the add or edit appointment button, this function works and redirect to new page.
  const AddAppointment = () => {
    history.push("/admin/randevular");
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            {/* I added card for integrate the form */}
            <Card>
              <CardHeader>
                <CardTitle className="CardTitle">Randevu Ekle</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label className="form-label">Bölüm</Label>
                    </Col>
                    <Col md={10}>
                      <Input type="select" name="select">
                        <option>Seçiniz...</option>
                        <option>Fizyoterapi</option>
                        <option>Dil Konuşma</option>
                        <option>Özel Eğitim</option>
                        <option>Psikoloji</option>
                      </Input>
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label className="form-label">Ad</Label>
                    </Col>
                    <Col md={10}>
                      <Input />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label className="form-label">Soyad</Label>
                    </Col>
                    <Col md={10}>
                      <Input />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label className="form-label">Tarih</Label>
                    </Col>
                    <Col md={10}>
                      <Input type="date" />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label className="form-label">Saat</Label>
                    </Col>
                    <Col md={10}>
                      <Input type="time" />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label className="form-label">Açıklama</Label>
                    </Col>
                    <Col md={10}>
                      <Input type="textarea" />
                    </Col>
                  </Row>
                  <Row style={{ margin: "20px" }}>
                    <Col md={{ size: 10, offset: 8 }}>
                      {/* Button for adding or editing / submitting the form */}
                      <Button
                        className="btn-update"
                        onClick={AddAppointment}
                        style={{ width: "50%", backgroundColor: "#3acce1" }}
                      >
                        Ekle
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default AddorEditAppointment;
