import { Contact } from '../types/contact';
import { Excursion } from '../types/excursion';
import { vitaGet, vitaPost } from '../utils/axiosUtils';

export const listContacts = () => vitaGet<Excursion[]>('contacts');

export const getContactById = (id: string) => vitaGet<Excursion>(`contacts/${id}`);

export const saveContact = (contact: Contact) => vitaPost<Contact>(`contacts/`, contact);

export default { listContacts, getContactById, saveContact };
