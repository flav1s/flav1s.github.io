import React from "react";
import { Box, Flex, Link, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1440}
      h={100}
      align="center"
      justify="flex-end"
      py={27}
      mx="auto"
    >
      <SimpleGrid as="nav" columns={4} spacing={10}>
        <Link textStyle="h5" href="#about">
          About
        </Link>
        <Link textStyle="h5" href="#skills">
          Skills
        </Link>
        <Link textStyle="h5" href="#contact">
          Contact
        </Link>
        <Box onClick={toggleColorMode} display="flex" alignItems="center">
          {colorMode === "light" ? <MoonIcon color="grey.300" /> : <SunIcon />}
        </Box>
      </SimpleGrid>
    </Flex>
  );
};

export default Header;
