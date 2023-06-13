import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../../actions/contactActions';
import { ContactItemContainer, ContactInfo, EditButton, RemoveButton } from './ContactItemStyles';

const ContactItem = ({ contact, handleRemove }) => {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [phone, setPhone] = useState(contact.phone);
    const dispatch = useDispatch();

    const handleEdit = () => {
        if (editing) {
            const editedContact = {
                ...contact,
                name,
                email,
                phone
            };

            dispatch(editContact(editedContact));
        }

        setEditing(!editing);
    };

    return (
        <ContactItemContainer>
            <ContactInfo>
                {editing ? (
                    <>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
                    </>
                ) : (
                    <>
                        <strong>{contact.name}</strong>
                        <span>Email: {contact.email}</span>
                        <span>Phone: {contact.phone}</span>
                    </>
                )}
            </ContactInfo>
            <EditButton onClick={handleEdit}>{editing ? 'Save' : 'Edit'}</EditButton>
            <RemoveButton onClick={() => handleRemove(contact.id)}>Remove</RemoveButton>
        </ContactItemContainer>
    );
};

export default ContactItem;
