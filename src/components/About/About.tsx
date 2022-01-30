import React from "react";
import { workExperience } from "../../config/work";
import { Chrono } from "react-chrono";
import { Box, Flex, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex id="about" flexDir="column" my={20} as="article">
      <Box mb={10} as="section">
        <Text as="h1" textStyle="h1" color="cyan.500">
          ▫ About
        </Text>
        <Text as="p" fontSize="1rem" mt={2} px={6}>
          Bachelor in Control and Automation Engineering, works with web
          development since 2019. Started as a fullstack developer (using
          Typescript and Python) but now work mostly with Frontend development
          (ReactJS).
        </Text>
      </Box>
      <Chrono
        items={workExperience}
        mode="VERTICAL_ALTERNATING"
        hideControls
        disableClickOnCircle
        useReadMore
        timelineCircleDimension={12}
        cardHeight={150}
        theme={{
          primary: "#61dafb",
          secondary: "#ffffff",
        }}
      />
    </Flex>
  );
};

export default About;
