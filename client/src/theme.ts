import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brandScheme: {
      50: "#E7D8FA",
      100: "#DFC7FD",
      200: "#CFAFF6",
      300: "#C69EF8",
      400: "#BF90FA",
      500: "#B981FF",
      600: "#A460FA",
      700: "#8B34F9",
      800: "#7C1DF5",
      900: "#7000FE",
    },
    brandPrimary: "#B981FF",
    primary: baseTheme.colors.pink[300],
    primaryHover: baseTheme.colors.pink[400],
    primarySelected: baseTheme.colors.pink[500],
    lightenBackground: baseTheme.colors.pink[50],
    lightenHover: "#FFE8EF",
    lightenSelected: baseTheme.colors.pink[100],
    contrastLabel: baseTheme.colors.white,
    label: baseTheme.colors.black
  }
});

export { theme };
