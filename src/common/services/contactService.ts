import axios from 'axios';
import { Contact } from '../types/contact';
import { Excursion } from '../types/excursion';
import { vitaGet } from '../utils/axiosUtils';

export const listContacts = () => vitaGet<Excursion[]>('contacts');

export const getContactById = (id: string) => vitaGet<Excursion>(`contacts/${id}`);

// export const saveContact = (contact: Contact) => vitaPost<Contact>(`contacts/`, contact);
export const saveContact = (contact: Contact) => {
    var data = {
        service_id: process.env.REACT_APP_EMAILJS_SERVICE,
        template_id: process.env.REACT_APP_EMAILJS_TEMPLATE,
        user_id: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        template_params: contact,
    };
    console.log(data)

    return axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
};

export default { listContacts, getContactById, saveContact };
