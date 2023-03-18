/* Components */
import { Todo } from "@/components";

/* Logic */
import { parseCookies } from "nookies";
import { useContext, useLayoutEffect } from "react";
import { SetThemeContext } from "@/context";

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);

  return {
    props: { THEME: cookies.THEME || null, TASKS: cookies.TASKS || null },
  };
}

export default function Home({ THEME, TASKS }) {
  const { setTheme } = useContext(SetThemeContext);

  useLayoutEffect(() => {
    if (THEME) setTheme(JSON.parse(THEME));
  }, []);

  return (
    <>
      <Todo TASKS={TASKS} />
    </>
  );
}
