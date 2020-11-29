import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, current, clearCurrent } = contactContext;
  useEffect(() => {
    if (current != null) {
      setContact(current);
    } else {
      setContact({
        name: '',
		description: '',
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
	description: '',
  });

  const { name, description } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('CONTACT', contact);
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='Product Name'
        name='name'
        value={name}
        onChange={onChange}
      />

	  <textarea
        
		rows="4"
		cols="50"
        placeholder='Description'
        name='description'
        value={description}
        onChange={onChange}
      />
      
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
