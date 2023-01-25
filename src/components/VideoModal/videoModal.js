import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import { Button } from "reactstrap";
import "./modal-video.scss";
import "../../views/MediaPool/MediaPool.css";

export class videoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <div>
          <ModalVideo
            channel="youtube"
            autoplay="1"
            videoId="Y4DvqWp5KyU"
            isOpen={this.state.isOpen}
            onClose={() => this.setState({ isOpen: false })}
          />
          <Button className="btn-watch" onClick={this.openModal}>
            <i className="fas fa-play-circle" /> İzle
          </Button>
        </div>
      </div>
    );
  }
}

export default videoModal;
