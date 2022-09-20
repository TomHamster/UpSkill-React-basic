import * as Yup from 'yup';

import { InvoiceFormData } from 'components/invoice-form/invoce-form.interfaces';

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchemaCompany = Yup.object().shape({
  companyName: Yup.string().required('Company name is required'),
  street: Yup.string().required('Street name is required'),
  city: Yup.string().required('City name is required'),
  postcode: Yup.string().required('Post code is required'),
  nip: Yup.string().required('Nip code is required'),
  tel: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  email: Yup.string().email('Email is Invalid'),
  bankAccount: Yup.string()
});

export const validationSchemaItem = Yup.object().shape({
  amount: Yup.number().moreThan(0, 'Amount should be higher than 0').required('Amount is required'),
  unit: Yup.string().required('Unt is required'),
  tax: Yup.number().required('Tax is required'),
  price: Yup.number().moreThan(0, 'Price should be higher than 0').required('Price is required'),
  name: Yup.string().required('Name is required')
});

export const validationSchema = Yup.object().shape({
  no: Yup.string().required('No is required'),
  sender: validationSchemaCompany,
  recipient: validationSchemaCompany,
  items: Yup.array().of(validationSchemaItem),
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
