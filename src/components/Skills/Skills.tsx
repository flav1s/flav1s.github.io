import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  return (
    <Flex id="skills" flexDir="column" my={20} as="article">
      <Box mb={10} as="section">
        <Text as="h1" textStyle="h1" color="cyan.500">
          ▫ Skills
        </Text>
        <SimpleGrid
          columns={{ sm: 1, md: 4 }}
          mt={10}
          spacing={10}
          as="section"
        >
          <img width="50%" src="/images/javascript.svg" alt="javascript logo" />
          <img width="50%" src="/images/typescript.svg" alt="typescript logo" />
          <img width="50%" src="/images/python.svg" alt="python logo" />
          <img width="50%" src="/images/html5.svg" alt="html5 logo" />
          <img width="50%" src="/images/css.svg" alt="css logo" />
          <img width="50%" src="/images/react.svg" alt="react logo" />
          <img width="50%" src="/images/nextjs.svg" alt="nextjs logo" />
          <img width="50%" src="/images/angular.svg" alt="angular logo" />
          <img width="50%" src="/images/django.svg" alt="django logo" />
          <img width="50%" src="/images/postgres.svg" alt="postgresql logo" />
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Skills;
