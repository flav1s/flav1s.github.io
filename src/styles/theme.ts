import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Link: {
      variants: {
        primary: ({ colorScheme = "grey.100" }) => ({
          color: `${colorScheme}`,
          _hover: {
            filter: "brightness(0.8)",
            textDecoration: "none",
          },
        }),
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Button: {
      cursor: "pointer",
    },
  },
  textStyles: {
    h1: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1rem",
    },
  },
  colors: {
    black: {
      800: "#151515",
    },
    white: {
      900: "#ffffff",
    },
    grey: {
      100: "#e1e1e6",
      300: "#a8a8b3",
      700: "#323238",
      800: "#29292e",
      850: "#1f2729",
      900: "#121214",
    },
    cyan: {
      100: "#85CDCB",
      500: "#61dafb",
    },
    teal: {
      400: "#7CC2AE",
      600: "#41B3A3",
    },
    red: {
      100: "#C38D9E",
      600: "#A23327",
      800: "#FF4531",
    },
    orange: {
      100: "#E8A87C",
      500: "#E27D60",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        bg: "black.800",
        color: "grey.100",
      },
    },
  },
});
