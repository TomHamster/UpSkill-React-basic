import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { InvoiceFormData } from 'components/invoice-form/invoce-form.interfaces';

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchemaCompany = () => {
  return Yup.object().shape({
    companyName: Yup.string().required(t('isRequired', { name: 'Company name' })),
    street: Yup.string().required(t('isRequired', { name: 'Street name' })),
    city: Yup.string().required(t('isRequired', { name: 'City name' })),
    postcode: Yup.string().required(t('isRequired', { name: 'Post code' })),
    nip: Yup.string().required(t('isRequired', { name: 'Nip code' })),
    tel: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string().email('Email is Invalid'),
    bankAccount: Yup.string()
  });
};

export const validationSchemaItem = () => {
  return Yup.object().shape({
    amount: Yup.number()
      .moreThan(0, 'Amount should be higher than 0')
      .required(t('isRequired', { name: 'Amount' })),
    unit: Yup.string().required(t('isRequired', { name: 'Unt' })),
    tax: Yup.number().required(t('isRequired', { name: 'Tax' })),
    price: Yup.number()
      .moreThan(0, 'Price should be higher than 0')
      .required(t('isRequired', { name: 'Price' })),
    name: Yup.string().required(t('isRequired', { name: 'Name' }))
  });
};

export const validationSchema = () => {
  return Yup.object().shape({
    no: Yup.string().required(t('isRequired', { name: 'No.' })),
    sender: validationSchemaCompany(),
    recipient: validationSchemaCompany(),
    items: Yup.array().of(validationSchemaItem()),
    created: Yup.date().typeError('Invalid date'),
    validUntil: Yup.date().when('created', (created, validationSchema) => {
      return (
        created &&
        validationSchema.min(
          created,
          `Date must be later than ${new Date(created).toLocaleDateString()}`
        )
      );
    })
  });
};

export const defaultValueItem = {
  name: '',
  amount: 1,
  unit: '',
  tax: 0,
  price: 0
};
export const defaultValueCompany = {
  companyName: '',
  city: '',
  postcode: '',
  nip: '',
  tel: '',
  email: '',
  bankAccount: '',
  street: ''
};

export const defaultValueForm: InvoiceFormData = {
  no: '',
  amount: 0,
  items: [defaultValueItem],
  recipient: { ...defaultValueCompany },
  sender: { ...defaultValueCompany },
  created: new Date().toISOString().slice(0, 10),
  validUntil: (() => {
    const now = new Date();
    return new Date(now.setDate(now.getDate() + 30)).toISOString().slice(0, 10);
  })()
};
