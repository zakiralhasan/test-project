import React from "react";

const Modal = () => {
  const modalData = JSON.parse(localStorage.getItem("formData"));
  return (
    <div>
      <input type="checkbox" id="test-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="test-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Stored name and sector given below.
          </h3>
          <div className="my-4">
            <p ><span className="font-bold">Name:</span> {modalData?.name}</p>
            <p ><span className="font-bold">Sector:</span> {modalData?.sector}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
