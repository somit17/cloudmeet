import { PrimeReactProvider } from "primereact/api";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider>

        <Component {...pageProps} />
    </PrimeReactProvider>
  );
}
