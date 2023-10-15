import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Page } from '../../common/components/Page/Page';
import './Contact.scss';
const ContactText = 'Contact';

export const Contact = (): JSX.Element => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
    });

    const { firstname, lastname, email, message } = formData;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // You can handle form submission here
        console.log('First Name:', firstname);
        console.log('Last Name:', lastname);
        console.log('Email:', email);
        console.log('Message:', message);
        // You can send data to the server or perform other actions here
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <Page description={ContactText} keywords={ContactText} title={ContactText} className="contact-page">
            <div className="contact-form-container">
                <img src="/contact-us.svg" alt="contact-us" className="contact-us-img" />
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="contact-message">Please fill out the form to contact us.</div>
                    <div className="name-fields">
                        <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            value={firstname}
                            onChange={handleInputChange}
                            margin="normal"
                            name="firstname"
                            className="form-field"
                        />

                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            value={lastname}
                            onChange={handleInputChange}
                            margin="normal"
                            name="lastname"
                            className="form-field"
                        />
                    </div>

                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={handleInputChange}
                        margin="normal"
                        name="email"
                        className="form-field"
                    />

                    <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={message}
                        onChange={handleInputChange}
                        margin="normal"
                        name="message"
                        className="form-field"
                    />

                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </div>

            <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d108690.19292973392!2d-8.026930121735917!3d31.645662069611056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAv%20Al%20Amira%2C%20Marrakech%2C%20Morocco!5e0!3m2!1sfr!2sus!4v1697394995363!5m2!1sfr!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </Page>
    );
};
