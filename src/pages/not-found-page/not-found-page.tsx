import PageTemplate from '@/templates/page-template';
import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const { t } = useTranslation();
  return <PageTemplate>{t('Page not found')}</PageTemplate>;
}
