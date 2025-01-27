import { AppProps } from "next/app"
import { Provider } from "@/components/ui/provider"
import { Literata } from "next/font/google"

const literata = Literata({
    subsets: ["latin", "cyrillic"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider>
          <style jsx global>{`
              html {
                  --font-literata: ${literata.style.fontFamily};
              }
          `}</style>
              <Component {...pageProps} />
      </Provider>

  )
}
