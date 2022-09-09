export interface Invoices {
  id: InvoicesColumnIds;
  no: string;
  created: string;
  amount: string;
  validUtil: string;
}

export enum InvoicesColumnIds {
  no = 'no',
  created = 'created',
  validUtil = 'validUtil',
  amount = 'amount'
}
