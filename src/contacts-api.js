import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export async function fetchAllContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export function addContacts(contact) {
  console.log(contact);
  const { data } = axios.post(`/contacts`, contact);
  return data;
}

export function deleteContacts(id) {
  const { data } = axios.delete(`/contacts/${id}`);
  console.log(id);
  return data;
}
