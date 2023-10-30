import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";
import { type NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import type { AppProps, AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Layout from "../layout/Layout";
import { env } from "~/env.mjs";

export type NextPageWithLayout<
  P = {
    [key: string]: unknown;
  },
  IP = P
> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ClerkProvider
      publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      localization={esES}
      {...pageProps}
    >
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
