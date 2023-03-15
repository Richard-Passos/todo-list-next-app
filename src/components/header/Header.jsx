/* Style */
import light from "@/styles/themes/light";
import dark from "@/styles/themes/dark";
import { Container } from "./Header.style";
import Image from "next/image";

export default function Header({ setTheme, theme }) {
  return (
    <Container>
      <h1>TODO</h1>

      <Image
        src={theme.iconPath}
        alt="theme-icon"
        width={26}
        height={26}
        className="icon-img"
        onClick={() => toggleTheme(setTheme)}
      />
    </Container>
  );
}

const toggleTheme = (setState) => {
  setState((prevState) => (prevState.title === "light" ? dark : light));
};
