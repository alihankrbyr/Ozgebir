import Pagi from "components/Pagination/Pagi";
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
import "../MediaPool/MediaPool.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import AddButton from "components/AddButton/AddButton";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FetchContacts } from "app/redux/actions/ContactActions";
import { DeleteContact } from "app/redux/actions/ContactActions";

function Contacts() {
  var number = 0;

  const contacts = useSelector((state) => state.allContacts.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchContacts());
  }, []);

  const contactList = contacts;
  const history = useHistory();
  //When I click the add or edit contact button, these function works and redirect to new page.

  const DeleteTheContact = (id) => {
    if (window.confirm("Are you sure to delete the contact?")) {
      dispatch(DeleteContact(id));
    }
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
                  İletişim Listesi
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table striped responsive className="randevu-table">
                  <thead className="text-top">
                    <tr>
                      {/* I specify the width of the columns in the table */}
                      <th>#</th>
                      <th>
                        Adres Başlığı <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th>
                        Telefon No <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th>
                        Telefon No 2 <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th>
                        Fax <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th>
                        Email <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th>
                        Adres <FontAwesomeIcon icon={faSort} />
                      </th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {contactList.map((item) => (
                      <tr key={item.id} className="row-height">
                        <td className="text-number">{(number = number + 1)}</td>
                        <td className="video-title">{item.title}</td>
                        <td className="video-title">{item.phone_1}</td>
                        <td className="video-title">{item.phone_2}</td>
                        <td className="video-title">{item.fax}</td>
                        <td className="video-title">{item.email}</td>
                        <td className="video-explanation" title={item.address}>
                          {item.address.substring(0, 120)}
                        </td>
                        <td className="text-right">
                          {/* I added 'edit' and 'delete' buttons to a column*/}
                          <Button
                            className="btn-Edit"
                            onClick={() =>
                              history.push(`/admin/iletisim_ekle/${item.id}`)
                            }
                          >
                            <i className="fas fa-pencil-alt" />
                            Düzenle
                          </Button>
                        </td>
                        <td className="text-left">
                          <Button
                            onClick={() => DeleteTheContact(item.id)}
                            className="btn-Delete"
                          >
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
        <Col
          className="col-12"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <Pagi />
        </Col>
        <Row className="bottom-row">
          {/* I added a row that includes 'add contact' button */}
          <AddButton onClick={() => history.push("/admin/iletisim_ekle")} />
        </Row>
      </div>
    </>
  );
}
export default Contacts;
