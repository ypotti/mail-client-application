import React from "react";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";

const EmailForm = () => {
  return (
    <div className="d-flex flex-column p-absolute bottom-0 d-none d-md-block col-md-4 height-60 email-form-div bg-light shadow">
      <div className="d-flex text-light bg-secondary pt-2 pb-1 ps-4 pe-4 mb-2 align-items-center justify-content-between rounded-top">
        <span>New Message</span>
        <div className="p-2 pointer">
          <AiOutlineClose />
        </div>
      </div>
      <div className="w-100 border-bottom border-1 ps-4 pe-4 mt-2 mb-2 pb-1 pt-1 d-flex align-items-center">
        <span>To:</span>
        <input
          type="text"
          className="flex-grow-1 ps-3 to-input"
          placeholder="Recipients"
        />
      </div>
      <div className="w-100 border-bottom border-1 ps-4 pe-4 mt-2 mb-2 pb-1 pt-1 d-flex align-items-center">
        <span>Sub:</span>
        <input
          type="text"
          className="flex-grow-1 ps-2 to-input"
          placeholder="Subject "
        />
      </div>
      <div className="ps-4 pe-4 height-50 flex-grow-1 mb-auto">
        <textarea
          className="w-100 h-100 to-input resize-none"
          cols="100"
          placeholder="Start typing..."
        />
      </div>
      <div className="border-top border-2 d-flex justify-content-end ps-4 pe-4 pt-2 pb-2 ">
        <button className="btn btn-outline-secondary me-4">
          Save as Draft
        </button>
        <button className="btn btn-secondary">Send</button>
      </div>
    </div>
  );
};

export default EmailForm;
