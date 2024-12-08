import { useRef } from 'react';
import parse from 'html-react-parser';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField/';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import contactService from '../../common/services/contactService';
import { Contact as Message } from '../../common/types/contact';
import { HOUSING_TYPES } from './constants';
import CircularProgress from '@mui/material/CircularProgress';
import { ErrorBoundarySuspense } from '../../common/components/ErrorBoundarySuspense/ErrorBoundarySuspense';
import { lazyComponent } from '../../common/utils/lazy';
import { AlertProps } from '@mui/material/Alert/Alert';
import Select from '@mui/material/Select/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
const Alert = lazyComponent(import('@mui/material/Alert/Alert')) as React.ComponentType<AlertProps>;

interface ContactFormProps {
    subject?: string;
}

// Uncontrolled form
export const ContactForm: React.FC<ContactFormProps> = ({ subject }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const { t } = useTranslation();
    const { isLoading, isSuccess, isError, mutateAsync } = useMutation(contactService.saveContact);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const form = formRef.current;

        const formData = new FormData(form!!);
        const data = Object.fromEntries(formData.entries());

        const contactData = { ...data, refUrl: window.location.href } as Message

        return mutateAsync(contactData)
            .then(() => {
                form!!.reset();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <TextField
                    label={t('full_name')}
                    required
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="fullName"
                    className="form-field"
                />
                <TextField
                    label={t('email')}
                    required
                    variant="outlined"
                    fullWidth
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
                        margin="normal"
                        name="country"
                        className="form-field"
                    />
                    <TextField
                        label={t('phone_number')}
                        required
                        variant="outlined"
                        fullWidth
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
                    defaultValue={subject}
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
                        defaultValue={1}
                        margin="normal"
                        name="numberOfAdults"
                        className="form-field"
                    />
                    <TextField
                        label={t('number_of_kids')}
                        variant="outlined"
                        type="number"
                        defaultValue={0}
                        margin="normal"
                        name="numberOfKids"
                        className="form-field"
                    />
                </div>
                <div className="groupped-fields">
                    <DatePicker
                        name="departureDate"
                        label={t('departure_date')}
                        defaultValue={dayjs(new Date().toDateString())}
                        className="form-field"
                    />
                    <DatePicker
                        name="returnDate"
                        label={t('return_date')}
                        defaultValue={dayjs(new Date().toDateString())}
                        className="form-field"
                    />
                </div>
                <FormControl className="form-field">
                    <InputLabel id="housing-type-label">{t('accomodation_type')}</InputLabel>
                    <Select
                        name="housingType"
                        label={t('accomodation_type')}
                        defaultValue=""
                        labelId="housing-type-label"
                    >
                        {HOUSING_TYPES.map((ht) => (
                            <MenuItem key={ht} value={ht}>
                                {t(`housing_types.${ht}`)}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    label={t('message')}
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={10}
                    margin="normal"
                    name="message"
                    className="form-field"
                />{' '}
                {isSuccess && (
                    <ErrorBoundarySuspense>
                        <Alert severity="success" variant="outlined" style={{ marginBottom: 5 }}>
                            {parse(t('contact.success_message'))}{' '}
                        </Alert>
                    </ErrorBoundarySuspense>
                )}
                {isError && (
                    <ErrorBoundarySuspense>
                        <Alert severity="error" variant="outlined" style={{ marginBottom: 5 }}>
                            {t('contact.error_message')}{' '}
                            <u>
                                <a href="https://wa.me/message/RECE76NM33GCB1" target="__blank">
                                    (+212) 662310037
                                </a>
                            </u>
                        </Alert>
                    </ErrorBoundarySuspense>
                )}
                <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
                    {isLoading && <CircularProgress size="1rem" style={{ marginRight: "0.5rem" }} />}
                    {t('submit')}
                </Button>
            </form>
        </LocalizationProvider>
    );
};