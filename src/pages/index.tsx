import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import { Resume } from "../components/Resume";
import { About } from "../components/About";

const Home: NextPage = () => {
  return (
    <Box
      my="1"
      maxWidth="container.md"
      mx="auto"
      px="6"
      w="100vw"
      h="100vh"
      overflowX="hidden"
    >
      <Header />

      <Resume />
      <About />
    </Box>
  );
};

export default Home;
