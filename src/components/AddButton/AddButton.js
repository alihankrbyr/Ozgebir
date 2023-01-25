import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router";
import "./AddButton.css";

function AddButton(props) {
  const history = useHistory();

  const pathname = window.location.pathname;

  console.log(props);

  const handleClick = () => {
    console.log(pathname);
    history.push(pathname + "_ekle");
  };

  return (
    <div>
    <Button className="add-button" onClick={handleClick}> 
     &nbsp; <i className="fas fa-plus" /> ekle 
      </Button>
    </div>
  );
}

export default AddButton;
