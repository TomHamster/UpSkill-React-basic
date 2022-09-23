import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PageTemplate from 'templates/page-template';

export default function NotFoundPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <PageTemplate>
      <Box sx={{ textAlign: 'center' }}>
        {t('Page not found')}
        <br />
        <Button
          sx={{ marginTop: '20px' }}
          variant="contained"
          onClick={() => {
            navigate(-1);
          }}>
          {t('Back to previous page')}
        </Button>
      </Box>
    </PageTemplate>
  );
}
