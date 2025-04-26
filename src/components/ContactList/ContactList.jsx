import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";

const getFilteredContacts = (userContacts, filterValue) => {
  if (filterValue !== "") {
    return userContacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        contact.number.includes(filterValue)
    );
  }
  return userContacts;
};

const ContactList = () => {
  const userContacts = useSelector((state) => state.contacts.items);
  const filterValue = useSelector((state) => state.filters.name);
  const filteredContacts = getFilteredContacts(userContacts, filterValue);

  return (
    <>
      <ul className={s.ul}>
        {filteredContacts.map((contact) => (
          <li className={s.li} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
