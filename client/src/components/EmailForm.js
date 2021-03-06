import React, { useContext } from "react";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";
import { ActionsContext } from "./Mail";

const EmailForm = () => {
  const { actions, setActions } = useContext(ActionsContext);
  const closeEmailForm = () => {
    setActions({
      ...actions,
      isNewMail: false,
      selectedMail: null,
      openLongMail: false,
    });
  };
  return (
    <div
      className={`d-flex flex-column p-absolute bottom-0 d-none d-md-block col-md-4 height-60 email-form-div bg-light shadow ${
        !actions.isNewMail && "d-md-none"
      }`}
    >
      <div className="d-flex text-light bg-secondary pt-2 pb-1 ps-4 pe-4 mb-2 align-items-center justify-content-between rounded-top">
        {actions.openLongMail ? (
          <span>Message from {actions.selectedMail.from.split("@")[0]}</span>
        ) : (
          <span>New Message</span>
        )}
        <div className="p-2 pointer" onClick={closeEmailForm}>
          <AiOutlineClose />
        </div>
      </div>
      <div className="w-100 border-bottom border-1 ps-4 pe-4 mt-2 mb-2 pb-1 pt-1 d-flex align-items-center">
        {actions.openLongMail ? (
          <>
            <span className="fw-bold">From:</span>
            <span className="ps-1">{actions.selectedMail.from}</span>
          </>
        ) : (
          <>
            <span className="fw-bold">To:</span>
            <input
              type="text"
              className="flex-grow-1 ps-3 to-input"
              placeholder="Recipients"
            />
          </>
        )}
      </div>
      <div className="w-100 border-bottom border-1 ps-4 pe-4 mt-2 mb-2 pb-1 pt-1 d-flex ">
        <span className="fw-bold">Sub:</span>
        {actions.openLongMail ? (
          <span className="ps-3">{actions.selectedMail.sub}</span>
        ) : (
          <input
            type="text"
            className="flex-grow-1 ps-2 to-input"
            placeholder="Subject "
          />
        )}
      </div>
      <div className="ps-4 pe-4 height-50 flex-grow-1 mb-auto">
        {actions.openLongMail ? (
          <textarea
            disabled
            className="w-100 h-100 to-input resize-none"
            value={actions.selectedMail.body}
          />
        ) : (
          <textarea
            value={""}
            className="w-100 h-100 to-input resize-none"
            cols="100"
            placeholder="Start typing..."
          />
        )}
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
