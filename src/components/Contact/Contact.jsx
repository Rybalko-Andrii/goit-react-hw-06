import React from "react";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact: { name, number, id } }) => {
  const dispath = useDispatch();

  const deleteUser = () => {
    dispath(deleteContact(id));
  };
  return (
    <>
      <div className={s.div}>
        <h3>{name}</h3>
        <a href={`tel:${number}`}>{number}</a>
      </div>
      <button className={s.button} type="button" onClick={deleteUser}>
        Delete
      </button>
    </>
  );
};

export default Contact;
