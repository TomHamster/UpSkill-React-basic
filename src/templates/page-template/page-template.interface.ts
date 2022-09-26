import { ReactNode } from 'react';

export interface PageTemplateProps {
  children: ReactNode;
  loading?: boolean;
  error?: string;
  errorCallback?: () => void;
}
