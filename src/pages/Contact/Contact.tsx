import parse from 'html-react-parser';
import { CircularProgress, Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
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

import './Contact.scss';

const ContactText = 'contact.title';

const FORMAT_DATE_DD_MM_YYYY = 'DD/MM/YYYY';
const ARGUMENT_FORMAT_DATE = 'fr-FR';

const initialContact: Message = {
    fullName: '',
    email: '',
    country: '',
    phoneNumber: '',
    subject: '',
    message: '',
    refUrl: '',
    numberOfAdults: 1,
    numberOfKids: 0,
    departureDate: new Date().toLocaleDateString(ARGUMENT_FORMAT_DATE),
    returnDate: new Date().toLocaleDateString(ARGUMENT_FORMAT_DATE),
    housingType: null,
    // housingCategory: null,
    // housingRegime: null,
    // flexibleDates: true,
};

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

interface ContactFormProps {
    subject?: string;
}
export const ContactForm: React.FC<ContactFormProps> = ({ subject }) => {
    const { t } = useTranslation();
    const { isLoading, isSuccess, isError, mutateAsync } = useMutation(contactService.saveContact);
    const [contactData, setContactData] = useState(initialContact);

    useEffect(() => {
        if (subject) {
            setContactData({ ...contactData, subject });
        }
    }, [subject]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        
        return mutateAsync({...contactData, refUrl: window.location.href})
            .then(() => {
                setContactData(initialContact);
            })
            .catch((err) => {
                console.log(err);
            }
        );
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactData({
            ...contactData,
            [name]: value,
        });
    };

    const handleDepartureDateChange = (value: Dayjs | null) => {
        setContactData({ ...contactData, departureDate: value?.format(FORMAT_DATE_DD_MM_YYYY) || null });
    };

    const handleReturnDateChange = (value: Dayjs | null) => {
        setContactData({ ...contactData, returnDate: value?.format(FORMAT_DATE_DD_MM_YYYY) || null });
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <TextField
                label={t('full_name')}
                required
                variant="outlined"
                fullWidth
                value={contactData.fullName}
                onChange={handleInputChange}
                margin="normal"
                name="fullName"
                className="form-field"
            />
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
                <DatePicker
                    label={t('departure_date')}
                    value={dayjs(contactData.departureDate, ARGUMENT_FORMAT_DATE)}
                    onChange={handleDepartureDateChange}
                    className="form-field"
                />
                <DatePicker
                    label={t('return_date')}
                    value={dayjs(contactData.returnDate, ARGUMENT_FORMAT_DATE)}
                    onChange={handleReturnDateChange}
                    className="form-field"
                />
            </div>
            <SelectBox
                options={HOUSING_TYPES.map((ht) => ({ label: t(`housing_types.${ht}`), value: ht }))}
                value={contactData.housingType ?? ''}
                onChange={(value: string) => {
                    setContactData({ ...contactData, housingType: value as HousingType });
                }}
                label={t('accomodation_type')}
                labelId="housing-type"
                parentClassName="form-field"
            />
            {/* <div className="groupped-fields">
                <SelectBox
                    options={HOUSING_TYPES.map((ht) => ({ label: t(`housing_types.${ht}`), value: ht }))}
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
                    options={HOUSING_REGIME.map((hg) => ({ label: t(`housing_regimes.${hg}`), value: hg }))}
                    value={contactData.housingRegime ?? ''}
                    onChange={(value: string) => {
                        setContactData({ ...contactData, housingRegime: value as HousingRegime });
                    }}
                    label={t('regime')}
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
            />{' '}
            {isSuccess && (
                <Alert severity="success" variant="outlined" style={{ marginBottom: 5 }}>
                    {parse(t('contact.success_message'))}{' '}
                </Alert>
            )}
            {isError && (
                <Alert severity="error" variant="outlined" style={{ marginBottom: 5 }}>
                    {t('contact.error_message')}{' '}
                    <u>
                        <a href="https://wa.me/message/RECE76NM33GCB1" target="__blank">
                            (+212) 662310037
                        </a>
                    </u>
                </Alert>
            )}
            <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
                {isLoading && <CircularProgress size="1rem" style={{ marginRight: "0.5rem"}}/>}
                {t('submit')}
            </Button>
        </form>
    );
};
