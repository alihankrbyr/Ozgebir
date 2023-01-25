/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useHistory } from "react-router";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import "./Shuttles.css";
function AddorEditShuttles() {
  const history = useHistory();
  const AddShuttles = () => {
    history.push("/admin/servisler");
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle className="CardTitle">Servis Listesi</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col style={{ marginTop: "1%" }} md="3">
                      <label htmlFor="exampleInputEmail1">Plaka</label>
                    </Col>
                    <Col style={{ marginTop: "1%" }} md="9">
                      <Input placeholder="07glb07" type="email" />
                    </Col>
                  </Row>

                  <Row>
                    <Col style={{ marginTop: "1%" }} md="3">
                      <label htmlFor="exampleInputEmail1">Şehir</label>
                    </Col>
                    <Col style={{ marginTop: "1%" }} md="9">
                      <Input placeholder="Antalya" type="email" />
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ marginTop: "1%" }} md="3">
                      <label htmlFor="exampleInputEmail1">Bölge</label>
                    </Col>
                    <Col style={{ marginTop: "1%" }} md="9">
                      <Input placeholder="Konyaaltı" type="email" />
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ marginTop: "1%" }} md="3">
                      <label htmlFor="exampleInputEmail1">Kalkış Saati</label>
                    </Col>
                    <Col style={{ marginTop: "1%" }} md="9">
                      <Input placeholder="18:30" type="email" />
                    </Col>
                  </Row>
                  <Row style={{ margin: "20px" }}>
                    <Col md={{ size: 10, offset: 8 }}>
                      {/* Button for adding or editing / submitting the form */}
                      <Button
                        className="btn-update"
                        onClick={AddShuttles}
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

export default AddorEditShuttles;
