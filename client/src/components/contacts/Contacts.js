import React, { Fragment, useContext, useEffect } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, getContacts } = contactContext;

  useEffect(() => {
    getContacts();
    //eslint-disable-next-line
  }, []);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
