/* Components */
import { Todo } from "@/components";

/* Logic */
import { parseCookies } from "nookies";
import { useContext, useLayoutEffect } from "react";
import { SetThemeContext } from "@/context";

export async function getStaticProps(context) {
  const cookies = parseCookies(context);

  return {
    props: { THEME: cookies.THEME || null, TASKS: cookies.TASKS || null },
  };
}

export default function Home({ THEME, TASKS }) {
  const { setTheme } = useContext(SetThemeContext);

  const a = ["22", "10003"];
  a.sort();

  useLayoutEffect(() => {
    if (THEME) setTheme(JSON.parse(THEME));
  }, []);

  return (
    <>
      <Todo TASKS={TASKS} />
    </>
  );
}
