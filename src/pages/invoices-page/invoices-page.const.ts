const BASE_URL = `/api/invoices`;

export const INVOICES_ENDPOINTS = {
  ALL: () => BASE_URL,
  ADD: () => BASE_URL,
  EDIT: (id: string) => `${BASE_URL}/${id}`,
  GER_INVOICE: (id: string) => `${BASE_URL}/${id}`
};
