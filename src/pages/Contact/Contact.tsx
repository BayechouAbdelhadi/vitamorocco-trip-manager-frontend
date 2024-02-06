import StarIcon from '@mui/icons-material/Star';
import { Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DateTimeValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import { useMutation } from 'react-query';
import { Page } from '../../common/components/Page/Page';
import SelectBox from '../../common/components/select/select';
import contactService from '../../common/services/contactService';
import { HousingRegime, HousingType, Contact as Message } from '../../common/types/contact';
import './Contact.scss';
import { HOUSING_REGIME, HOUSING_TYPES } from './constants';

const ContactText = 'contact.title';
const initialContact: Omit<Message, 'fullName'> & { firstname: string; lastname: string } = {
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
    numberOfAdults: 0,
    numberOfKids: 0,
    departureDate: null,
    returnDate: null,
    housingType: null,
    housingCategory: null,
    housingRegime: null,
    flexibleDates: null,
};

export const Contact = (): JSX.Element => {
    const { t } = useTranslation(); // 'contact' should match the namespace in your i18n configuration
    const { isLoading, isSuccess, mutateAsync } = useMutation(contactService.saveContact);
    const [contactData, setContactData] = useState(initialContact);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const { firstname, lastname, ...otherContactFields } = contactData;

        const contact: Message = { fullName: `${lastname} ${firstname}`, ...otherContactFields };

        return mutateAsync(contact).then(() => {
            setContactData(initialContact);
        });
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactData({
            ...contactData,
            [name]: value,
        });
    };

    const handleDepartureDateChange = (
        value: Dayjs | null,
        context: PickerChangeHandlerContext<DateTimeValidationError>
    ) => {
        setContactData({ ...contactData, departureDate: value?.toISOString() ?? null });
    };

    const handleReturnDateChange = (
        value: Dayjs | null,
        context: PickerChangeHandlerContext<DateTimeValidationError>
    ) => {
        setContactData({ ...contactData, returnDate: value?.toISOString() ?? null });
    };

    return (
        <Page description={t(ContactText)} keywords={t(ContactText)} title={t(ContactText)} className="contact-page">
            <Container>
                <div className="contact-form-container">
                    <img src="/img/contact-us.svg" alt="contact-us" className="contact-us-img" />
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="contact-message">{t('contact.message')}</div>
                        {isSuccess && (
                            <Alert severity="success" variant="outlined">
                                Thank you for contacting us. Your message has been received. You can expect to receive a
                                response within 24 hours at the email address you provided.{' '}
                            </Alert>
                        )}
                        <div className="groupped-fields">
                            <TextField
                                label={t('firstName')}
                                required
                                variant="outlined"
                                fullWidth
                                value={contactData.firstname}
                                onChange={handleInputChange}
                                margin="normal"
                                name="firstname"
                                className="form-field"
                            />
                            <TextField
                                label={t('lastName')}
                                required
                                variant="outlined"
                                fullWidth
                                value={contactData.lastname}
                                onChange={handleInputChange}
                                margin="normal"
                                name="lastname"
                                className="form-field"
                            />
                        </div>
                        <div className="groupped-fields">
                            <TextField
                                label={t('email')}
                                required
                                variant="outlined"
                                fullWidth
                                value={contactData.email}
                                onChange={handleInputChange}
                                margin="normal"
                                name="email"
                                className="form-field"
                            />
                            <TextField
                                label={t('phoneNumber')}
                                required
                                variant="outlined"
                                fullWidth
                                value={contactData.phoneNumber}
                                onChange={handleInputChange}
                                margin="normal"
                                name="phoneNumber"
                                className="form-field"
                            />
                        </div>
                        <TextField
                            label={t('subject')}
                            required
                            variant="outlined"
                            fullWidth
                            value={contactData.subject}
                            onChange={handleInputChange}
                            margin="normal"
                            name="subject"
                            className="form-field"
                        />
                        {
                            //Fields of reservation
                        }
                        {/* <div className="groupped-fields">
                            <TextField
                                label={t('numberOfAdults')}
                                required
                                variant="outlined"
                                type="number"
                                value={contactData.numberOfAdults}
                                onChange={handleInputChange}
                                margin="normal"
                                name="numberOfAdults"
                                className="form-field"
                            />
                            <TextField
                                label={t('numberOfKids')}
                                required
                                variant="outlined"
                                type="number"
                                value={contactData.numberOfKids}
                                onChange={handleInputChange}
                                margin="normal"
                                name="numberOfKids"
                                className="form-field"
                            />
                        </div>
                        <div className="groupped-fields">
                            <DateTimePicker
                                label="departureDate"
                                value={dayjs(contactData.departureDate)}
                                onChange={handleDepartureDateChange}
                                className="contact-date-picker form-field"
                            />
                            <DateTimePicker
                                label="returnDate"
                                value={dayjs(contactData.returnDate)}
                                onChange={handleReturnDateChange}
                                className="contact-date-picker form-field"
                            />
                        </div>
                        <div className="groupped-fields">
                            <SelectBox
                                options={HOUSING_TYPES.map((t) => ({ label: t, value: t }))}
                                value={contactData.housingType ?? ''}
                                onChange={(value: string) => {
                                    setContactData({ ...contactData, housingType: value as HousingType });
                                }}
                                label="housingType"
                                labelId="housing-type"
                                parentClassName="form-field"
                            />
                            <SelectBox
                                options={[1, 2, 3, 4, 5].map((i) => ({
                                    label: (
                                        <div className="category-star-row">
                                            <div>{i}</div> <StarIcon />
                                        </div>
                                    ),
                                    value: i.toString(),
                                }))}
                                value={contactData.housingCategory?.toString() ?? ''}
                                onChange={(value: string) => {
                                    setContactData({ ...contactData, housingCategory: parseInt(value) });
                                }}
                                label="housingCategory"
                                labelId="housing-category"
                                parentClassName="form-field"
                            />
                            <SelectBox
                                options={HOUSING_REGIME.map((t) => ({ label: t, value: t }))}
                                value={contactData.housingRegime ?? ''}
                                onChange={(value: string) => {
                                    setContactData({ ...contactData, housingRegime: value as HousingRegime });
                                }}
                                label="housingRegime"
                                labelId="housing-regime"
                                parentClassName="form-field"
                            />
                        </div> */}
                        <TextField
                            label={t('message')}
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={10}
                            value={contactData.message}
                            onChange={handleInputChange}
                            margin="normal"
                            name="message"
                            className="form-field"
                        />
                        <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
                            {t('submit')}
                        </Button>
                    </form>
                </div>
                <iframe
                    title="map"
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d108690.19292973392!2d-8.026930121735917!3d31.645662069611056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAv%20Al%20Amira%2C%20Marrakech%2C%20Morocco!5e0!3m2!1sfr!2sus!4v1697394995363!5m2!1sfr!2sus"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Container>
        </Page>
    );
};
