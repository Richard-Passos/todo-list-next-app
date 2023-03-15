/* Style */
import light from "@/styles/themes/light";
import { ThemeProvider } from "styled-components";
import { Container, Content } from "./Layout.style";
import { Header } from "../header";

/* Logic */
import { useState } from "react";
import Head from "next/head";

export default function Layout({ font, children }) {
  const [theme, setTheme] = useState(light);

  return (
    <>
      <Head>
        <title>Todo</title>
        <meta name="description" content="Todo app with next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <ThemeProvider theme={theme}>
        <Container className={font.className}>
          <Content>
            <Header setTheme={setTheme} theme={theme} />

            {children}
          </Content>
        </Container>
      </ThemeProvider>
    </>
  );
}
