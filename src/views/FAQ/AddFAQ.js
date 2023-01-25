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
} from "reactstrap";
import "../Users/users.css";

const AddFAQ = () => {
  const history = useHistory();
  const AddFAQ = () => {
    history.push("/admin/sss");
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle className="CardTitle">Soru Ekle</CardTitle>
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
                <Row style={{ margin: "20px" }}>
                  <Col md={9}></Col>
                  <Col md={3}>
                    <button className="buttonAddFAQ" onClick={AddFAQ}>
                      EKLE
                    </button>
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
export default AddFAQ;
