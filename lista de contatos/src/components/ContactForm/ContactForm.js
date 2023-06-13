import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addContact } from '../../actions/contactActions';
import { ContactFormContainer, Form, Label, Input, Button } from './ContactFormStyles';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const newContact = {
            id: uuidv4(),
            name,
            email,
            phone
        };

        dispatch(addContact(newContact));
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <ContactFormContainer>
            <h2>Add Contact</h2>
            <Form onSubmit={handleSubmit}>
                <Label>Name</Label>
                <Input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Label>Email</Label>
                <Input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Label>Phone</Label>
                <Input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <Button type="submit">Add</Button>
            </Form>
        </ContactFormContainer>
    );
};

export default ContactForm;
