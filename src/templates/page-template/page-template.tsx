import { Box, Container } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

import NavBar from '../../components/navbar/navbar';
import { PageTemplateProps } from './page-template.interface';

const PageTemplate: FC<PageTemplateProps> = ({ children }) => {
  const [state, setState] = useState<null | any>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        setState({ todo: json });
      });
  });
  return (
    <Box>
      <NavBar />
      <Container>{children}</Container>
      <p>title : {state?.todo?.title}</p>
    </Box>
  );
};

export default PageTemplate;
