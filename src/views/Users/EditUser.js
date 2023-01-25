import { useHistory } from "react-router";
import {
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import "./users.css";

const EditUser = () => {
  const history = useHistory();
  const EditUser = () => {
    history.push("/admin/kullanicilar");
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle className="CardTitle">Mehmet Okur</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label>Kullanıcı Tipi</Label>
                    </Col>
                    <Col md={10}>
                      <Input type="select" name="select">
                        <option>Seçiniz...</option>
                        <option>Öğrenci</option>
                        <option>Doktor</option>
                        <option>Yönetici</option>
                      </Input>
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label>Ad</Label>
                    </Col>
                    <Col md={10}>
                      <Input />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label>Soyad</Label>
                    </Col>
                    <Col md={10}>
                      <Input />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label>Email</Label>
                    </Col>
                    <Col md={10}>
                      <Input type="email" />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label>Şifre</Label>
                    </Col>
                    <Col md={10}>
                      <Input type="password" />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label>Telephone</Label>
                    </Col>
                    <Col md={10}>
                      <Input type="tel" />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label>Telephone 2 (Acil Durum)</Label>
                    </Col>
                    <Col md={10}>
                      <Input type="tel" />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label>Adres</Label>
                    </Col>
                    <Col md={10}>
                      <Input type="textarea" />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label>Doğum Tarihi GG/AA/YY</Label>
                    </Col>
                    <Col md={10}>
                      <Input type="date" />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label>Cinsiyet</Label>
                    </Col>
                    <Col md={10}>
                      <Input
                        type="radio"
                        name="gender"
                        value="male"
                        style={{ marginLeft: "10px" }}
                      />
                      <Label style={{ marginLeft: "30px" }}>KADIN</Label>
                      <Input
                        type="radio"
                        name="gender"
                        value="female"
                        style={{ marginLeft: "50px" }}
                      />
                      <Label style={{ marginLeft: "70px" }}>ERKEK</Label>
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label>Baba Adı</Label>
                    </Col>
                    <Col md={10}>
                      <Input />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label>Ana Adı</Label>
                    </Col>
                    <Col md={10}>
                      <Input />
                    </Col>
                  </Row>
                </Form>
                <Row style={{ margin: "20px" }}>
                  <Col className="add-btn-col">
                    <Button className="btn-update" onClick={EditUser}>
                      GÜNCELLE
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default EditUser;
