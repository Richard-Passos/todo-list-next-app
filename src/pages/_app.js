/* Style */
import { Josefin_Sans } from "next/font/google";
import ResetStyle from "@/styles/reset";
import GlobalStyle from "@/styles/global";
import { Layout } from "@/components";

const josefin_Sans = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />

      <Layout font={josefin_Sans}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
