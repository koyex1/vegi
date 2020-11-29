import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, description} = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left' >
          {name}{' '}
      </h3>
      <ul className='list'>
        
		{description && (
          <li>
            <i className='fas fa-info-circle'> {description}</i>
          </li>
        )}
       
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm far fa-edit'
          onClick={() => setCurrent(contact)}
        >
        </button>
        <button className='btn btn-danger btn-sm far fa-trash-alt' onClick={onDelete}>
        </button>
      </p>
    </div>
  );
};

export default ContactItem;
