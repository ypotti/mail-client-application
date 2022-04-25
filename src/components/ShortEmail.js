import React, { useContext } from "react";
import { ActionsContext } from "./Mail";
import "./style.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const ShortEmail = (props) => {
  const { actions, setActions } = useContext(ActionsContext);
  const { details } = props;

  const changeIsRead = () => {
    // Toggle the isRead property when executed
    let newMailItemsArray = [];
    actions.mailItemsArray.forEach((item) => {
      if (item.id === details.id) {
        item.isRead = !details.isRead;
      }
      newMailItemsArray.push(item);
    });
    setActions({
      ...actions,
      mailItemsArray: [...newMailItemsArray],
    });
  };

  const deleteEmail = () => {
    // delete email from list
    const newMailItemsArray = actions.mailItemsArray.filter(
      (item) => item.id !== details.id
    );
    setActions({
      ...actions,
      mailItemsArray: [...newMailItemsArray],
    });
  };

  const openWindowToConfirm = () => {
    // Open window to confirm delete
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      iconColor: "#455a64",
      showCancelButton: true,
      confirmButtonColor: "#455a64",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEmail();
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "success",
          title: "E-mail Deleted Successfully",
        });
      }
    });
  };

  const getSubject = (content, size) => {
    if (content.length > size) {
      return content.substring(0, size) + "...";
    }
    return content;
  };

  const showLongEmail = () => {
    let newMailItemsArray = [];
    actions.mailItemsArray.forEach((item) => {
      if (item.id === details.id) {
        item.isRead = true;
      }
      newMailItemsArray.push(item);
    });
    setActions({
      ...actions,
      mailItemsArray: [...newMailItemsArray],
      isNewMail: true,
      openLongMail: true,
      selectedMail: { ...details },
    });
  };

  return (
    <tr
      className={`${
        details.isRead ? "class-read" : "class-unread"
      } pointer table-row`}
    >
      {console.log(actions)}

      <td
        className="ps-4 d-flex align-items-center justify-content-between name-cell"
        onClick={showLongEmail}
      >
        <span>{details.from.split("@")[0]}</span>
        <div
          className={`text-end text-light me-2 rounded category-text ${details.category}`}
        >
          <span>{details.category}</span>
        </div>
      </td>
      <td className="content-cell" onClick={showLongEmail}>
        <span>{getSubject(details.sub, 40)}</span>
      </td>
      <td className="text-end pe-4" onClick={showLongEmail}>
        23:05 - Apr-21
      </td>
      <td className="icons-cell fw-bold">
        {details.isRead ? (
          <BsEyeSlash
            className="me-3 mini-icon-inbox"
            title="Mark as UnRead"
            onClick={changeIsRead}
          />
        ) : (
          <BsEye
            className="me-3 mini-icon-inbox"
            title="Mark as Read"
            onClick={changeIsRead}
          />
        )}
        <AiOutlineDelete
          className="mini-icon-inbox "
          title="Delete"
          onClick={openWindowToConfirm}
        />
      </td>
    </tr>
  );
};

export default ShortEmail;
