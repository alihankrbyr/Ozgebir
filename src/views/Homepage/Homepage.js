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
import "./Homepage.css";
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components test

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";
import { useHistory } from "react-router";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

function Homepage() {
  const history = useHistory();

  const Profile = () => {
    history.push("/admin/profil");
  };
  const User = () => {
    history.push("/admin/kullanicilar");
  };
  const Media = () => {
    history.push("/admin/medya_havuzu");
  };
  const Randevu = () => {
    history.push("/admin/randevular");
  };
  const Service = () => {
    history.push("/admin/servisler");
  };

  return (
    <>
      <div responsive className="content">
        <Row>
          <Col lg="6">
            <Card
              style={{ marginTop: "2%", height: "100%" }}
              className="card-user"
            >
              <div className="image ">
                {/* <img
                  alt="..."
                  src={require("assets/img").default}
                /> */}
                <h5 id="WelcomeTitle" className="title ">
                  Hoşgeldiniz!
                </h5>
                <p id="WelcomeTitle" className="description">
                  lorem İpsum!
                </p>
              </div>
              <CardBody style={{ marginLeft: "1%" }}>
                {/* <p className="description text-center">
                  "I like the way you work it <br />
                  No diggity <br />I wanna bag it up"
                </p> */}

                <div
                  id="bodyCard"
                  style={{ marginLeft: "-1%", maxHeight: "20px" }}
                  className="button-container"
                >
                  <Row>
                    <Col className="ml-auto" lg="4" md="4" xs="4">
                      <div
                        style={{ marginLeft: "-20%", marginTop: "-45%" }}
                        className="author"
                      >
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar border-gray"
                            src={require("assets/img/profile2.png").default}
                          />
                          <h5 className="title text-secondary">Gamze Akın</h5>
                        </a>
                        <p className="description text-secondary">admin</p>
                      </div>
                    </Col>
                    <Col
                      style={{ marginTop: "-3%" }}
                      className="ml-auto mr-auto"
                      lg="4"
                      md="4"
                      xs="4"
                    >
                      <h5>
                        125 <br />
                        <small>Lorem</small>
                      </h5>
                      <Button
                        style={{ marginTop: "2%" }}
                        size="md"
                        className="DashBoardProfileButton"
                        onClick={Profile}
                      >
                        Profile Git{" "}
                        <i className="nc-icon nc-minimal-right text-center"></i>
                      </Button>
                    </Col>
                    <Col
                      style={{ marginTop: "-3%" }}
                      className="mr-auto"
                      lg="3"
                      md="4"
                      xs="4"
                    >
                      <h5>
                        57 <br />
                        <small>Lorem</small>
                      </h5>
                    </Col>
                    <hr />{" "}
                  </Row>
                </div>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>

          <Col id="col1" style={{marginTop:"-1%"}} lg="3">
            <Row style={{ height: "52%" }}>
              <Button
                onClick={User}
                id="BtnRoute"
                style={{ height: "100%", width: "100%" }}
              >
                <Card
                  style={{ height: "100%", width: "100%" }}
                  className="card-stats"
                >
                  <CardBody>
                    <Col md="0"></Col>
                    <Col md="12" style={{ paddingTop: "5%" }}>
                      <div
                        id="icon1"
                        className="icon-big text-center icon-warning"
                      >
                        <i className="nc-icon nc-badge text-primary" />
                      </div>
                      <div className="numbers text-center">
                        <div id="user1">
                          <p className=" card-category">Kullanıcılar</p>
                        </div>

                        <p />
                      </div>
                    </Col>
                  </CardBody>
                </Card>
              </Button>
            </Row>

            <Row style={{ height: "52%" }}>
              <Button
                onClick={Media}
                id="BtnRoute"
                style={{ height: "100%", width: "100%" }}
              >
                <Card
                  style={{ height: "100%", width: "100%" }}
                  className="card-stats"
                >
                  <CardBody>
                    <Col md="0"></Col>
                    <Col md="12" style={{ paddingTop: "5%" }}>
                      <div
                        id="icon3"
                        className="icon-big text-center icon-warning "
                      >
                        <i className="nc-icon nc-image media " />
                      </div>
                      <div className="numbers text-center ">
                        <div id="medya3">
                          <p className="card-category">Medya Havuzu</p>
                        </div>

                        <p />
                      </div>
                    </Col>
                  </CardBody>
                </Card>
              </Button>
            </Row>
          </Col>
          <br />
          <Col id="col2" style={{marginTop:"-1%"}} lg="3" className="card-col">
            <Row style={{ height: "52%" }}>
              <Button
                onClick={Randevu}
                id="BtnRoute"
                style={{ height: "100%", width: "100%" }}
              >
                <Card
                  style={{ height: "100%", width: "100%" }}
                  className="card-stats"
                >
                  <CardBody>
                    <Col md="0"></Col>
                    <Col md="12" style={{ paddingTop: "5%" }}>
                      <div
                        id="icon2"
                        className="icon-big text-center icon-warning"
                      >
                        <i className="nc-icon text-danger nc-calendar-60 " />
                      </div>
                      <div className="text-center numbers">
                        <div id="randevu2">
                          {" "}
                          <p className="card-category  ">Randevular</p>
                        </div>

                        <p />
                      </div>
                    </Col>
                  </CardBody>
                </Card>
              </Button>
            </Row>
            <Row style={{ height: "52%" }}>
              <Button
                onClick={Service}
                id="BtnRoute"
                style={{ height: "100%", width: "100%" }}
              >
                <Card
                  style={{ height: "100%", width: "100%" }}
                  className="card-stats"
                >
                  <CardBody>
                    <Col md="0"></Col>
                    <Col md="12" style={{ paddingTop: "5%" }}>
                      <div
                        id="icon4"
                        className="icon-big text-center icon-warning"
                      >
                        <i className="nc-icon nc-bus-front-12 service" />
                      </div>
                      <div className="numbers text-center">
                        <div id="service4">
                          <p className="card-category">Servisler</p>
                        </div>

                        <p />
                      </div>
                    </Col>
                  </CardBody>
                </Card>
              </Button>
            </Row>
          </Col>
        </Row>

        <Row style={{ marginTop: "50px" }}>
          <Col md="4">
            <Card style={{ height: "96%" }}>
              <CardHeader>
                <CardTitle tag="h5">Başarı Durumu</CardTitle>
                <p className="card-category">Son güncel Performans</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              <CardFooter>
                <Row>
                  <Col md="6">
                    <div className="legend">
                      <i id="Video" className="fa fa-circle " />
                      Videolar <br />{" "}
                      <i id="Activity" className="fa fa-circle " />
                      Etkinlikler
                      <br />{" "}
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="legend">
                      <i id="Complete" className="fa fa-circle " />
                      Tamamlanan
                      <br /> <i id="Incomplete" className="fa fa-circle " />
                      Yapılmayan
                      <br />{" "}
                    </div>
                  </Col>
                </Row>

                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Başarı
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-chart" style={{ height: "96%" }}>
              <CardHeader>
                <CardTitle tag="h5">Lorem İpsum</CardTitle>
                <p className="card-category">Line Chart with Points</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i id="CorrectChart" className="fa fa-circle " />
                  Doğru
                  <br /> <i id="WrongChart" className="fa fa-circle " />
                  Yanlış
                  <br />{" "}
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check" />
                  Başarı İstatistiği
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row className="card-row">
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Lorem İpsum</CardTitle>
                <p className="card-category">24 Saatlik Performans</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboard24HoursPerformanceChart.data}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row></Row>
      </div>
    </>
  );
}

export default Homepage;
