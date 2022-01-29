import { Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Resume = () => {
  return (
    <Flex mx={64} my={20} flexDirection="column">
      <SimpleGrid columns={2} spacing={10}>
        <Flex flexDirection="column" justifyContent="center">
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
            Flávia Rocha
          </Text>
          <Text fontSize="0.9rem" mt={2}>
            Bacharel em Engenharia de Controle e Automação, trabalha com
            desenvolvimento web desde 2019 (
            <strong>Typescript/Javascript</strong> e <strong>Python</strong>),
            como desenvolvedora full-stack. Atualmente tem focado no
            desenvolvimento frontend (<strong>ReactJS / NextJS</strong>).
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
        <img src="/images/girl_code.svg" alt="girl coding" />
      </SimpleGrid>
    </Flex>
  );
};

export default Resume;
