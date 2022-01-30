import { Flex, Box, Text, SimpleGrid, Link } from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <Flex id="contact" my={20} as="article">
      <Box mb={10} as="section">
        <Text as="h1" textStyle="h1" color="cyan.500" mb={4}>
          ▫ Contact
        </Text>
        <SimpleGrid spacing={8} columns={{ sm: 1, md: 2 }} px={6}>
          <Flex alignItems="center">
            <img width="30px" src="/images/email.svg" alt="email" />
            <Text as="p" fontSize="0.9rem" ml={2} fontWeight={600}>
              flaviaccruzr [ @ ] gmail.com
            </Text>
          </Flex>

          <Flex alignItems="center">
            <img width="30px" src="/images/github.svg" alt="github" />
            <Link isExternal href="https://github.com/flav1s">
              <Text as="p" fontSize="0.9rem" ml={2} fontWeight={600}>
                https://github.com/flav1s
              </Text>
            </Link>
          </Flex>

          <Flex alignItems="center">
            <img width="30px" src="/images/linkedin.svg" alt="linkedin" />
            <Link isExternal href="https://www.linkedin.com/in/flaviaccruzr/">
              <Text as="p" fontSize="0.9rem" ml={2} fontWeight={600}>
                https://www.linkedin.com/in/flaviaccruzr/
              </Text>
            </Link>
          </Flex>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Contact;
