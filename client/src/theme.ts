import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: baseTheme.colors.pink[300],
    primaryHover: baseTheme.colors.pink[400],
    primarySelected: baseTheme.colors.pink[500],
    contrastLabel: baseTheme.colors.white,
    label: baseTheme.colors.black
  }
});

export { theme };
