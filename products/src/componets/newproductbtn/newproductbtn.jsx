import React, { useState } from "react";
import "./newproductbtn.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        + New product
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="container"></div>
            <h4>Add New Product</h4>
            <p>Product Name</p>
            <input className="input" placeholder="Ex: iphone x"></input>
            <button className="close-modal" onClick={toggleModal}>X</button>
            <p>Description</p>
            <input className="input1" placeholder="Ex: An apple mobile which is nothing like apple"></input>
            <p>Product Price</p>
            <input className="input" placeholder="Ex: 12,000"></input>
            <br></br>
            <button className="save" onClick={toggleModal}>save</button>
            <button className="cancel" onClick={toggleModal}>cancel</button>
          </div>
        </div>
      )}
       </>
  );
}