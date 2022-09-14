import i18n from '@/i18n/i18nForTests';
import { RenderOptions, render } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import { I18nextProvider } from 'react-i18next';

const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
