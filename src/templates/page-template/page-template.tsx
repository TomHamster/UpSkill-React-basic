import { Box, Container } from '@mui/material';
import React, { FC, useEffect, useMemo, useState } from 'react';

import NavBar from '../../components/navbar/navbar';
import { PageTemplateProps } from './page-template.interface';

const PageTemplate: FC<PageTemplateProps> = ({ children }) => {
  const [state, setState] = useState<any | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        setState({ todo: json });
      });
  }, []);

  const todo: any | null = useMemo<any | null>(() => {
    return state?.todo;
  }, [state]);

  return (
    <Box>
      <NavBar />
      <Container>{children}</Container>
      <p>titless : {todo?.title}</p>
    </Box>
  );
};

export default PageTemplate;
