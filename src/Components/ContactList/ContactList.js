import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListStyle.module.scss';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={s.TaskList}>
    {contacts.map(contact => (
      <li className={s.TaskList_item} key={contact.id}>
        {contact.name + ':' + contact.number}
        {
          <button
            className={s.TaskList_button}
            type="button"
            name="delte"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactList;
