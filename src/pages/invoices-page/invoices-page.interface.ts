export interface Invoice {
  id: InvoicesColumnIds;
  no: string;
  created: string;
  amount: number;
  validUntil: string;
}

export enum InvoicesColumnIds {
  no = 'no',
  created = 'created',
  validUntil = 'validUntil',
  amount = 'amount'
}
