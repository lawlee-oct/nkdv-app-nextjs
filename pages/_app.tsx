import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Head from 'next/head';

import { FooterLayout, HeaderLayout } from '@/src/layouts';
import ContentLayout from '@/src/layouts/content';

import GlobalStyle from '@/src/assets/styles/globalstyles';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Hihi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <HeaderLayout />

        <ContentLayout>
          <Component {...pageProps} />
        </ContentLayout>

        <FooterLayout />
      </ThemeProvider>
    </>
  );
};

export default App;