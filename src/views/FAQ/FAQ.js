import React, { useEffect } from "react";
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

import { useSelector, useDispatch } from "react-redux";
import "../Users/users.css";
import Pagi from "components/Pagination/Pagi";
import AddButton from "components/AddButton/AddButton";
import { FetchFaq } from "app/redux/actions/FaqActions";
import { deleteFaq } from "app/redux/actions/FaqActions";

const FAQ = () => {
  const faq = useSelector((state) => state.allFaq.faq);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchFaq());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Silmek istediğinize emin misiniz ? ")) {
      dispatch(deleteFaq(id));
    }
  };

  const faqList = faq;

  let number = 0;

  const history = useHistory();

  const EditFAQ = () => {
    history.push("/admin/sss_duzenle");
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle className="CardTitle">
                  Sıkça Sorulan Sorular Listesi
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table striped responsive>
                  <thead className="text-top">
                    <tr>
                      <th>#</th>
                      <th width="80%">Soru</th>
                    </tr>
                  </thead>

                  <tbody>
                    {faqList.map((faq) => (
                      <tr className="row-height" key={faq.id}>
                        <td className="text-number">{(number += 1)}</td>
                        <td className="video-explanation" title={faq.title}>
                          {faq.description.substring(0, 120)}
                        </td>

                        <td className="text-right">
                          <Button className="btn-Edit" onClick={EditFAQ}>
                            <i className="fas fa-pencil-alt" />
                            Düzenle
                          </Button>
                        </td>
                        <td className="text-left">
                          <Button
                            className="btn-Delete"
                            onClick={() => handleDelete(faq.id)}
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
        <Col className="col-12">
          <Pagi />
        </Col>
        <Row className="bottom-row">
          {/* <Button className="add-videoButton" onClick={MediaPoolAdd}>
              <i className="fas fa-plus" />
              <br />
              Video
              <br />
              Ekle
            </Button> */}
          <AddButton />
        </Row>
      </div>
    </>
  );
};

export default FAQ;
