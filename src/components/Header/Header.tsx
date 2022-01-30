import React from "react";
import { Flex, Link, SimpleGrid } from "@chakra-ui/react";

const Header = () => {
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
      <SimpleGrid as="nav" columns={3} spacing={10}>
        <Link textStyle="h5" href="#about">
          About
        </Link>
        <Link textStyle="h5" href="#skills">
          Skills
        </Link>
        <Link textStyle="h5" href="#contact">
          Contact
        </Link>
      </SimpleGrid>
    </Flex>
  );
};

export default Header;
