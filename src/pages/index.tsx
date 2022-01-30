import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import { Resume } from "../components/Resume";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";

const Home: NextPage = () => {
  return (
    <Box my="1" maxWidth="container.md" mx="auto" px="6" w="100vw" h="100vh">
      <Header />

      <Resume />
      <About />
      <Skills />
      <Contact />
    </Box>
  );
};

export default Home;
