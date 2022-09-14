export interface Invoice {
  id: InvoicesColumnIds;
  no: string;
  created: string;
  amount: string;
  validUtil: string;
}

export enum InvoicesColumnIds {
  no = 'no',
  created = 'created',
  validUntil = 'validUtil',
  amount = 'amount'
}
