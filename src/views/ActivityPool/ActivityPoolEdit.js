import { Button } from "reactstrap";
import React from "react";
import { useHistory } from "react-router";
import { useDropzone } from "react-dropzone";
import { MdCloudUpload } from "react-icons/md";

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
} from "reactstrap";

import "./ActivityPoolEdit.css";

function ActivityPoolEdit() {
  const history = useHistory();

  const ActivityPool = () => {
    history.push("/admin/etkinlik_havuzu");
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: ".mp4",
  });
  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));
  return (
    <>
      <div className="content">
        <row>
          <Col>
            <Card className="card-user">
              <CardHeader>
                <CardTitle className="CardTitle">
                  Lorem ipsum dolor sit amet
                </CardTitle>
              </CardHeader>

              <CardBody>
                <Form>
                  <FormGroup row>
                    <Label for="text" sm={2} className="text-descr">
                      Video Başlığı
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
                    <Label for="textarea" sm={2} className="text-descr">
                      Açıklama
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="textarea"
                        name="textarea"
                        id="exampleTextarea"
                        placeholder="Fizyoterapi"
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="file" sm={2} className="text-descr">
                      Video
                    </Label>

                    <Col sm={10}>
                      <section className="file-container video-container">
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
                  </FormGroup>

                  <FormGroup row>
                    <Col className="add-btn-col">
                      <Button className="btn-update" onClick={ActivityPool}>
                        EKLE
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </row>
      </div>
    </>
  );
}

export default ActivityPoolEdit;
