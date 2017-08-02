import fetch from 'isomorphic-fetch';

const customerUrl = 'http://localhost:50753/api/customer';

export async function getAllCustomers() {
  const resp = await fetch(customerUrl);
  const customers = await resp.json();

  return customers;
}
