import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <Box
      my="1"
      maxWidth={1480}
      mx="auto"
      px="6"
      w="100vw"
      h="100vh"
      overflowX="hidden"
    >
      <Header />

      <p>Hello World</p>
    </Box>
  );
};

export default Home;
