import React from "react";
import { useDropzone } from "react-dropzone";
import { useHistory } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";

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
import "./css/DeviceRecommendationEdit.css";

function DeviceRecommendationAdd(props) {
  const history = useHistory();

  const back = () => {
    let path = `cihazlar_ve_oneriler`;
    history.push(path);
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: ".pdf, image/png",
  });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle className="CardTitle">
                  Cihaz veya Öneri Ekle
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label>Video Başlığı</Label>
                    </Col>
                    <Col md={10}>
                      <Input type="select" name="select">
                        <option>Seçiniz...</option>
                        <option>AAAA</option>
                        <option>BBB</option>
                        <option>CCC</option>
                      </Input>
                    </Col>
                  </Row>
                  <Row form className="row-item">
                    <Col md={2}>
                      <Label>Açıklama</Label>
                    </Col>
                    <Col md={10}>
                      <Input placeholder="Açıklama" />
                    </Col>
                  </Row>
                  <Row form className="row-item"></Row>
                  <Row form className="row-item video-row">
                    <Col md={2}>
                      <Label>Video</Label>
                    </Col>
                    <Col md={10}>
                      <section className="file-container video-container-device">
                        <div {...getRootProps({ className: "dropzone" })}>
                          <input {...getInputProps()} />
                          <div className="dropzone-inside">
                            <p>
                              <MdCloudUpload />
                            </p>
                            <em>
                              Dosyaları buraya bırakın veya yüklemek için
                              tıklayın.
                            </em>
                          </div>
                        </div>
                        <aside>
                          <ul>{acceptedFileItems}</ul>
                        </aside>
                      </section>
                    </Col>
                  </Row>
                </Form>
                <Row className="edit">
                  <button className="editButton" onClick={back}>
                    EKLE
                  </button>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default DeviceRecommendationAdd;
