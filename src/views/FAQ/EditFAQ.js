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
import "../Users/users.css";

const EditFAQ = () => {
  const history = useHistory();
  const EditFAQ = () => {
    history.push("/admin/sss");
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle className="CardTitle">
                  Sıkça Sorulan Sorular
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label style={{ fontWeight: "bold" }}>Soru</Label>
                    </Col>
                    <Col md={10}>
                      <Input type="text" name="question" id="question" />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label style={{ fontWeight: "bold" }}>Cevap</Label>
                    </Col>
                    <Col md={10}>
                      <Input type="text" name="answer" id="answer" />
                    </Col>
                  </Row>
                </Form>
                <Row className="edit">
                  <Button className="editButton" onClick={EditFAQ}>
                    GÜNCELLE
                  </Button>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default EditFAQ;
