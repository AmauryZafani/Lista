import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../actions/contactActions';
import ContactItem from '../ContactItem/ContactItem';
import { ContactListContainer } from './ContactListStyles';

const ContactList = () => {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    const handleRemove = id => {
        dispatch(removeContact(id));
    };

    return (
        <ContactListContainer>
            {contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    handleRemove={handleRemove}
                />
            ))}
        </ContactListContainer>
    );
};

export default ContactList;
