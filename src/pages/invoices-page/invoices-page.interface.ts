export interface Invoice {
  id: InvoicesColumnIds;
  no: string | null;
  created: string | null;
  amount: number | null;
  validUntil: string | null;
}

export enum InvoicesColumnIds {
  no = 'no',
  created = 'created',
  validUntil = 'validUntil',
  amount = 'amount'
}
