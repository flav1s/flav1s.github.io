import {
  Flex,
  Link,
  SimpleGrid,
  Text,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const Resume = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex as="article" my={20} flexDirection="column" alignContent="center">
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10} as="section">
        <Flex flexDirection="column" justifyContent="center">
          <Flex justifyContent="space-between" alignItems="center" mb={3}>
            <Box>
              <Text
                bg="cyan.500"
                color="grey.700"
                p={1}
                fontWeight="600"
                borderRadius={8}
                width="fit-content"
                fontSize="0.8rem"
              >
                Frontend Developer
              </Text>
              <Text my={3} textStyle="h4" lineHeight="0.8">
                Hi, I'm Flávia 👋
              </Text>
            </Box>

            {!isWideVersion && (
              <img width="40%" src="/images/girl_code.svg" alt="girl coding" />
            )}
          </Flex>
          <Text as="p" fontSize="0.9rem" mt={2}>
            I'm a frontend developer experienced in Angular and ReactJS from
            Brazil. 🇧🇷
          </Text>
          <Text as="p" fontSize="0.9rem" mt={2}>
            Also worked as a fullstack developer using Python (Django/Flask).
          </Text>

          <SimpleGrid columns={3} gap={1} width="30%" my={3}>
            <Link isExternal href="mailto:flaviaccruzr@gmail.com">
              <img width="30px" src="/images/email.svg" alt="email" />
            </Link>
            <Link isExternal href="https://github.com/flav1s">
              <img width="24px" src="/images/github.svg" alt="github" />
            </Link>
            <Link isExternal href="https://www.linkedin.com/in/flaviaccruzr/">
              <img width="24px" src="/images/linkedin.svg" alt="linkedin" />
            </Link>
          </SimpleGrid>
        </Flex>
        {isWideVersion && <img src="/images/girl_code.svg" alt="girl coding" />}
      </SimpleGrid>
    </Flex>
  );
};

export default Resume;
