import { Invoice } from '@/pages/invoices-page/invoices-page.interface';

export interface CompanyData {
  companyName: string;
  city: string;
  postcode: string;
  nip: string;
  tel: string;
  email: string;
  street: string;
  bankAccount: string;
}

export interface InvoiceItem {
  name: string;
  amount: number;
  unit: string;
  tax: number;
  price: number;
}

export interface InvoiceFormData extends Partial<Invoice> {
  recipient: CompanyData;
  sender: CompanyData;
  items: InvoiceItem[];
}

export interface InvoiceFormProps {
  formData?: InvoiceFormData;
  onSave: any;
}
