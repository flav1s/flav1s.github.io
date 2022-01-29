import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import { Resume } from "../components/Resume";

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
      {/* <Header /> */}

      <Resume />
    </Box>
  );
};

export default Home;
