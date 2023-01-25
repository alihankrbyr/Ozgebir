import React from "react";
import {
  Card,
  CardHeader,
  Row,
  Col,
  Label,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Button,
  CardFooter,
} from "reactstrap";

import "./Profile.css";
import { useHistory } from "react-router";

function User() {
  const history = useHistory();

  const Homepage = () => {
    history.push("/admin/anasayfa");
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="3">
            <Card className="card-user">
              <div className="image">
                <h5 className="title-hg ">Hoşgeldiniz!</h5>
                <p className="text-msg">Mutlu Günler dileriz tabi mümkünse !</p>
              </div>
              <CardBody style={{ marginLeft: "1%" }}>
                <div
                  id="body"
                  style={{ marginLeft: "-1%", maxHeight: "20px" }}
                  className="button-container"
                >
                  <Row>
                    <Col className="ml-auto" lg="4" md="4" xs="4">
                      <div style={{ marginLeft: "-400%" }} className="author">
                        <img
                          alt="..."
                          className="avatar border-gray"
                          src={require("assets/img/profile2.png").default}
                        />
                        <h5 className="title-profilName">Gamze AKIN</h5>

                        <p className="text-profilTip">Yönetici</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>

          {/* edit profile */}

          <Col md="9">
            <Card className="card-user1">
              <CardHeader>
                <CardTitle className="CardTitle">Profil</CardTitle>
              </CardHeader>

              <CardBody>
                <Form>
                  <FormGroup row>
                    <Label for="exampleSelect" sm={2}>
                      Kullanıcı Tipi
                    </Label>
                    <Col sm={10}>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Yönetici</option>
                        <option>Doktor</option>
                        <option>Öğrenci</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="text" sm={2}>
                      Ad
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="text"
                        name="text"
                        id="exampleText"
                        placeholder="Gamze"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="text" sm={2}>
                      Soyad
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="text"
                        name="text"
                        id="exampleText"
                        placeholder="AKIN"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={2}>
                      Email
                    </Label>
                    <Col sm={10}>
                      <Input type="email" name="email" id="exampleEmail" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="examplePassword" sm={2}>
                      Şifre
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="examplePhone" sm={2}>
                      Telefon
                    </Label>
                    <Col sm={10}>
                      <Input type="phone" name="phone" id="examplePhone" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="examplePassword" sm={2}>
                      Telefon 2 (Acil Durum)
                    </Label>
                    <Col sm={10}>
                      <Input type="phone" name="phone" id="examplePhone" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="exampleAddress" sm={2}>
                      Adres
                    </Label>
                    <Col sm={10}>
                      <Input type="textarea" name="text" id="exampleAddress" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="exampleDate" sm={2}>
                      Doğum Tarihi (GG/AA/YYYY)
                    </Label>
                    <Col sm={5}>
                      <Input type="date" name="date" id="exampleDate" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="exampleDate" sm={2}>
                      Cinsiyet
                    </Label>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" /> KADIN
                      </Label>
                    </FormGroup>

                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" /> ERKEK
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="text" sm={2}>
                      Baba Adı
                    </Label>
                    <Col sm={10}>
                      <Input type="text" name="text" id="exampleText" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="text" sm={2}>
                      Anne Adı
                    </Label>
                    <Col sm={10}>
                      <Input type="text" name="text" id="exampleText" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col sm={{ size: 10, offset: 8 }}>
                      <Button className="btn-update" onClick={Homepage}>
                        GÜNCELLE
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
