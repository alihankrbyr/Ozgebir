import React from "react";
import "./Pagi.css";
const Pagi = (props) => {
  return (
    <div className="pagination">
      <a href="#" className="disabled-pg">
        Önceki
      </a>
      <a href="#" className="active">
        1
      </a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">Sonraki</a>
    </div>
  );
};

export default Pagi;
