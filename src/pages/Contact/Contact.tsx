import parse from 'html-react-parser';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField/';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Container from '@mui/material/Container';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { Page } from '../../common/components/Page/Page';
import TextWithLines from '../../common/components/QuiltedImageList/TitleWithLines';
import SelectBox from '../../common/components/select/select';
import contactService from '../../common/services/contactService';
import { HousingType, Contact as Message } from '../../common/types/contact';
import { HOUSING_TYPES } from './constants';
import CircularProgress from '@mui/material/CircularProgress';

import './Contact.scss';
import { ContactForm } from './ContactForm';

const ContactText = 'contact.title';


export const Contact = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Page
            description={t(ContactText)}
            keywords={t(ContactText)}
            title={t(ContactText)}
            imgSrc="img/contact/contact_title.webp"
            className="contact-page"
        >
            <Container>
                <TextWithLines text={t('contact.message')} />
                <div className="contact-form-container">
                    <img src="/img/contact-us.svg" alt="contact-us" className="contact-us-img" loading="lazy" />
                    <ContactForm />
                </div>
                {/* <iframe
                    title="map"
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d108690.19292973392!2d-8.026930121735917!3d31.645662069611056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAv%20Al%20Amira%2C%20Marrakech%2C%20Morocco!5e0!3m2!1sfr!2sus!4v1697394995363!5m2!1sfr!2sus"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe> */}
            </Container>
        </Page>
    );
};
