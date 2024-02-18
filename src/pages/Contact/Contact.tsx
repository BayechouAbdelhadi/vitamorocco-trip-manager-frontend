import StarIcon from '@mui/icons-material/Star';
import { Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DateTimeValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { Page } from '../../common/components/Page/Page';
import TextWithLines from '../../common/components/QuiltedImageList/TitleWithLines';
import SelectBox from '../../common/components/select/select';
import contactService from '../../common/services/contactService';
import { HousingRegime, HousingType, Contact as Message } from '../../common/types/contact';
import { HOUSING_REGIME, HOUSING_TYPES } from './constants';

import './Contact.scss';

const ContactText = 'contact.title';

const initialContact: Omit<Message, 'fullName'> & { firstname: string; lastname: string } = {
    firstname: '',
    lastname: '',
    email: '',
    country: '',
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
    return (
        <Page
            description={t(ContactText)}
            keywords={t(ContactText)}
            title={t(ContactText)}
            imgSrc="img/contact/contact_title.jpg"
            className="contact-page"
        >
            <Container>
                <TextWithLines text={t('contact.message')} />
                <div className="contact-form-container">
                    <img src="/img/contact-us.svg" alt="contact-us" className="contact-us-img" />
                    {/* {!isXs && <img src="/img/contact-us.svg" alt="contact-us" className="contact-us-img" />} */}
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

interface ContactForm {
    subject?: string;
}
export const ContactForm: React.FC<ContactForm> = ({ subject }) => {
    const { t } = useTranslation(); // 'contact' should match the namespace in your i18n configuration
    const { isLoading, isSuccess, isError, mutateAsync } = useMutation(contactService.saveContact);
    const [contactData, setContactData] = useState(initialContact);

    useEffect(() => {
        if (subject) {
            setContactData({ ...contactData, subject });
        }
    }, [subject]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const { firstname, lastname, ...otherContactFields } = contactData;

        const contact: Message = { fullName: `${lastname} ${firstname}`, ...otherContactFields };

        return mutateAsync(contact)
            .then(() => {
                setContactData(initialContact);
            })
            .catch((err) => {
                console.log(err);
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
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="groupped-fields">
                <TextField
                    label={t('first_name')}
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
                    label={t('last_name')}
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
            <div className="groupped-fields">
                <TextField
                    label={t('country')}
                    required
                    variant="outlined"
                    fullWidth
                    value={contactData.country}
                    onChange={handleInputChange}
                    margin="normal"
                    name="country"
                    className="form-field"
                />
                <TextField
                    label={t('phone_number')}
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
            <div className="groupped-fields">
                <TextField
                    label={t('number_of_adults')}
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
                    label={t('number_of_kids')}
                    // required
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
                    label="Departure Date"
                    value={dayjs(contactData.departureDate ?? new Date())}
                    onChange={handleDepartureDateChange}
                    className="form-field"
                />
                <DateTimePicker
                    label="Return Date"
                    value={dayjs(contactData.returnDate ?? new Date())}
                    onChange={handleReturnDateChange}
                    className="form-field"
                />
            </div>
            <div className="groupped-fields">
                <SelectBox
                    options={HOUSING_TYPES.map((t) => ({ label: t, value: t }))}
                    value={contactData.housingType ?? ''}
                    onChange={(value: string) => {
                        setContactData({ ...contactData, housingType: value as HousingType });
                    }}
                    label={t('accomodation_type')}
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
                    label={t('category')}
                    labelId="housing-category"
                    parentClassName="form-field"
                />
                <SelectBox
                    options={HOUSING_REGIME.map((t) => ({ label: t, value: t }))}
                    value={contactData.housingRegime ?? ''}
                    onChange={(value: string) => {
                        setContactData({ ...contactData, housingRegime: value as HousingRegime });
                    }}
                    label={t('regime')}
                    labelId="housing-regime"
                    parentClassName="form-field"
                />
            </div>
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
            />{' '}
            {isSuccess && (
                <Alert severity="success" variant="outlined" style={{ marginBottom: 5 }}>
                    Thank you for contacting us. Your message has been received. You can expect to receive a response
                    within 24 hours at the email address you provided.{' '}
                </Alert>
            )}
            {isError && (
                <Alert severity="error" variant="outlined" style={{ marginBottom: 5 }}>
                    Could not send your message please contact us on whatsapp{' '}
                    <u>
                        <a href="https://wa.me/message/RECE76NM33GCB1" target="__blank">
                            (+212) 662310037
                        </a>
                    </u>
                </Alert>
            )}
            <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
                {t('submit')}
            </Button>
        </form>
    );
};
