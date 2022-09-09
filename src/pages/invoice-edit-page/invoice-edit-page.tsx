import { useParams } from 'react-router-dom';

import PageTemplate from '../../templates/page-template';

export default function InvoiceEditPage() {
  const params = useParams();

  return <PageTemplate>form {params.id}</PageTemplate>;
}
