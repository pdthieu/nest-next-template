import React from "react"
import { NextPage } from "next"
import type { AppProps } from "next/app"

import "../styles/globals.css"
import Provider from "@/providers"

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactNode) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: any
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page)

  return <Provider pageProps={pageProps}>{getLayout(<Component {...pageProps} />)}</Provider>
}

export default MyApp
