import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Form,
  Row,
  Label,
  Input,
  Button,
} from "reactstrap";
import "./contact.css";
import { AddContact } from "app/redux/actions/ContactActions";
import { GetContact } from "app/redux/actions/ContactActions";
function AddorEditContact() {
  const [newContact, setContact] = useState({
    title: "",
    email: "",
    address: "",
    phone_1: "",
    phone_2: "",
    fax: "",
  });

  const { id } = useParams();
  console.log(id);
  const { contact } = useSelector((state) => state.allContacts.contact);

  const history = useHistory();
  const dispatch = useDispatch();
  //When I click the add or edit appointment button, this function works and redirect to new page.
  const HandleAddContact = () => {
    dispatch(AddContact(newContact));
    history.push("/admin/iletisim");
  };

  // useEffect(() => {
  //   if (id) {
  //     dispatch(GetContact(id));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (newContact) {
  //     setContact({ ...newContact });
  //   }
  // }, [contact]);
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            {/* I added card for integrate the form */}
            <Card>
              <CardHeader>
                <CardTitle className="CardTitle">
                  İletişim Bilgisi Ekle
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={HandleAddContact}>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label className="form-label">Adres Başlığı</Label>
                    </Col>
                    <Col md={10}>
                      <Input
                        onChange={(e) =>
                          setContact({ ...newContact, title: e.target.value })
                        }
                        value={newContact.title}
                        required
                      />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label className="form-label">Email</Label>
                    </Col>
                    <Col md={10}>
                      <Input
                        type="email"
                        onChange={(e) =>
                          setContact({ ...newContact, email: e.target.value })
                        }
                        name="email"
                        value={newContact.email}
                        required
                      />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label className="form-label">Telefon No</Label>
                    </Col>
                    <Col md={10}>
                      <Input
                        type="number"
                        onChange={(e) =>
                          setContact({ ...newContact, phone_1: e.target.value })
                        }
                        value={newContact.phone1}
                        required
                      />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label className="form-label">Telefon No 2</Label>
                    </Col>
                    <Col md={10}>
                      <Input
                        type="number"
                        onChange={(e) =>
                          setContact({ ...newContact, phone_2: e.target.value })
                        }
                        value={newContact.phone2}
                      />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label className="form-label">Fax</Label>
                    </Col>
                    <Col md={10}>
                      <Input
                        type="number"
                        onChange={(e) =>
                          setContact({ ...newContact, fax: e.target.value })
                        }
                        value={newContact.fax}
                      />
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label className="form-label">Adres</Label>
                    </Col>
                    <Col md={10}>
                      <Input
                        type="textarea"
                        onChange={(e) =>
                          setContact({ ...newContact, address: e.target.value })
                        }
                        value={newContact.address}
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="edit">
                    <Button className="editButton">GÜNCELLE</Button>
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
export default AddorEditContact;
