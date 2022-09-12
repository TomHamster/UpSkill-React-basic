import { Container } from '@mui/material';
import { styled } from '@mui/system';

import { PageNavHeight } from './page-template.constants';

export const PageContainer = styled(Container)(() => ({
  margin: `${PageNavHeight} auto`
}));
