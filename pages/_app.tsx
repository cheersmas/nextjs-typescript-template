import 'styles/globals.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { description, name } from 'package.json';
import { ReactElement } from 'react';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
