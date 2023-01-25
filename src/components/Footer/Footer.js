/*eslint-disable*/
import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://www.softalya.com" target="_blank">
                  Softalya
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=fkt5Vhkbffc"
                  target="_blank"
                >
                  Batman Klarnet
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/search?q=terms+of+service&rlz=1C1NDCM_enTR877TR877&oq=terms+of+service&aqs=chrome.0.0i512l10.10407j0j7&sourceid=chrome&ie=UTF-8"
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <div className="copyright">
              &copy; 2021, made with{" "}
              <i
                style={{ position: "relative", left: "3px" }}
                className="fa fa-heart heart"
              />
              by Softalya
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
