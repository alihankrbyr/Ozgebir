import React from "react";
import { useHistory } from "react-router";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Label,
  Form,
  FormGroup,
  Input,
  Button,
  Row,
} from "reactstrap";
import Select from "react-select";

import "./AddExercises.css";

function AddExercises() {
  const history = useHistory();

  const redirectToExercises = () => {
    history.push("/admin/egzersizler");
  };

  const sectionOptions = [
    { value: "fizyoterapi", label: "Fizyoterapi" },
    { value: "pdr", label: "PDR" },
    { value: "ozel-egitim", label: "Ozel Egitim" },
    { value: "dil-konusma", label: "Dil Konusma" },
  ];

  return (
    <div className="content">
      <Row>
        <Col>
          <Card className="card-user">
            <CardHeader>
              <CardTitle className="CardTitles">
                Lorem ipsum dolor sit amet
              </CardTitle>
            </CardHeader>

            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="text" sm={2} className="text-descr">
                    Egzersiz Adi
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="text"
                      id="exampleText"
                      placeholder="Lorem ipsum dolor sit amet"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="text" sm={2} className="text-descr">
                    Bolum
                  </Label>
                  <Col sm={10}>
                    {/* <Input
                      type="text"
                      name="text"
                      id="exapmleText"
                      placeholder="Lorem ipsum dolor sir amet"
                    /> */}
                    <Select options={sectionOptions} />
                  </Col>
                </FormGroup>
                {/* <FormGroup row>
                  <Label for="textarea" sm={2} className="text-descr">
                    Aciklama
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="textarea"
                      name="textarea"
                      id="exampleTextarea"
                      placeholder="Lorem ipsum dolor sit amet"
                    />
                  </Col>
                </FormGroup> */}
                <FormGroup row>
                  <Label for="text" sm={2} className="text-descr">
                    Doktor Adi
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="text"
                      id="exampleText"
                      placeholder="Lorem ipsum dolor sir amet"
                    />
                  </Col>
                </FormGroup>
                {/* <FormGroup row>
                  <Label for="text" sm={2} className="text-descr">
                    Hasta Adi
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="text"
                      id="exampleText"
                      placeholder="Lorem ipsum dolor sir amet"
                    />
                  </Col>
                </FormGroup> */}
                <FormGroup row>
                  <Label for="file" sm={2} className="text-descr">
                    Video
                  </Label>
                  <Col sm={10}>
                    <Button size="lg" className="btn-file">
                      <i className="fas fa-cloud-alt fa-3x" />
                      <br />
                      <br />
                      <p>
                        Dosyalari buraya birakin veya yuklemek icin tiklayin
                      </p>
                    </Button>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col className="add-btn-col">
                    <Button
                      className="btn-update"
                      onClick={redirectToExercises}
                    >
                      Ekle
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AddExercises;
