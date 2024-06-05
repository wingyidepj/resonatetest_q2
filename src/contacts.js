// src/Contacts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './contacts.css';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setContacts(response.data))
            .catch(error => console.error('Error fetching contacts:', error));
    }, []);

    return (
        <div className="contacts-container">
            {contacts.map(contact => (
                <div key={contact.id} className="contact-card">
                    <h2>{contact.name}</h2>
                    <p><strong>Email:</strong> {contact.email}</p>
                    <p><strong>Phone:</strong> {contact.phone}</p>
                    <p><strong>Website:</strong> {contact.website}</p>
                    <p><strong>Address:</strong> {`${contact.address.street}, ${contact.address.city}`}</p>
                    <p><strong>Company:</strong> {contact.company.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Contacts;