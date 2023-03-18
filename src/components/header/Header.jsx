/* Components */
import light from "@/styles/themes/light";
import dark from "@/styles/themes/dark";
import { Container } from "./Header.style";
import Image from "next/image";

/* Logic */
import { setCookie } from "nookies";

export default function Header({ setTheme, theme }) {
  return (
    <Container>
      <h1>TODO</h1>

      <Image
        src={theme.images.iconPath}
        alt="theme-icon"
        width={26}
        height={26}
        className="icon-img"
        onClick={() => toggleTheme(theme, setTheme)}
      />
    </Container>
  );
}

const toggleTheme = (theme, setState) => {
  const themeToAply = theme.title === "light" ? dark : light;

  setState(themeToAply);
  setCookie(null, "THEME", JSON.stringify(themeToAply), {
    maxAge: 86400 * 7,
    path: "/",
  });
};
