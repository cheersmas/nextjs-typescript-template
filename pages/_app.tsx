import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import 'styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
