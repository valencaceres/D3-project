import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";

import type { ReactElement, ReactNode } from "react";

import type { NextPage } from "next";
import type { AppProps, AppType } from "next/app";
import { useRouter } from "next/router";

import "~/styles/globals.css";

import Layout from "../layout/Layout";
import DashboardLayout from "~/layout/DashboardLayout";

import { env } from "~/env.mjs";

import { api } from "~/utils/api";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  getDashboardLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);

  const isDashboardPage = router.pathname.startsWith("/dashboard");

  return (
    <ClerkProvider
      publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      localization={esES}
      {...pageProps}
    >
      <Layout>
        {isDashboardPage ? (
          <>
            <DashboardLayout>
              <div className="main">
                {getLayout(<Component {...pageProps} />)}
              </div>
            </DashboardLayout>
          </>
        ) : (
          <>
            {getLayout(<Component {...pageProps} />)}
          </>
        )}
      </Layout>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
