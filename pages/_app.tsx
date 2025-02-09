import { AppProps } from "next/app"
import { Provider } from "@/components/ui/provider"
import { Literata } from "next/font/google"
import { Geist} from "next/font/google";

const literata = Literata({
    subsets: ["latin", "cyrillic"],
})

const geist = Geist({
  subsets: ["latin"],
})


export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider>
          <style jsx global>{`
              html {
                  --font-literata: ${literata.style.fontFamily};
                  --font-geist: ${geist.style.fontFamily};
              }
          `}</style>
              <Component {...pageProps} />
      </Provider>

  )
}
