"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  chakra,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaBriefcase, FaBuilding } from "react-icons/fa";

// Motion components
const MotionBox = chakra(motion.div);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  // Theme colors based on color mode
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const headingColor = useColorModeValue("blue.600", "blue.300");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const primaryColor = useColorModeValue("blue.500", "blue.300");
  const timelineBg = useColorModeValue("gray.200", "gray.700");

  const experiences = [
    {
      company: "COHESITY",
      role: "Member of Technical Staff 2",
      location: "Bangalore",
      duration: "Jul 2023 - Present",
      description: [
        "Designed and developed multiple high-performance internal backend tools in Python.",
        "Improved debugging efficiency by 30–40% for 100+ engineers.",
        "Resolved critical backend issues ensuring 98% code reliability and stability.",
        "Optimized system resource management by 15% using Iris API.",
        "Technologies Used: Python, C++, Linux Shell, REST APIs, Distributed Systems.",
      ],
    },
    {
      company: "ORACLE",
      role: "Application Development Intern",
      location: "Bangalore",
      duration: "May 2022 - Jul 2022",
      description: [
        "Developed an AI-powered internal chatbot reducing manual load by 30%.",
        "Improved internal workflow efficiency by 15% using Oracle Digital Assistant.",
        "Technologies Used: NodeJS, YAML, Docker, Python.",
      ],
    },
  ];

  return (
    <Box
      as="section"
      id="experience"
      py={20}
      bg={sectionBg}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="container.xl" position="relative" zIndex="1">
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <MotionBox variants={itemVariants} mb={16} textAlign="center">
            <Heading
              as="h2"
              size="2xl"
              mb={6}
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
              fontWeight="extrabold"
            >
              Professional Experience
            </Heading>
            <Text
              fontSize="xl"
              maxW="3xl"
              mx="auto"
              color={textColor}
              lineHeight="tall"
            >
              My professional journey in the tech industry.
            </Text>
          </MotionBox>

          <Grid templateColumns={{ base: "1fr" }} gap={10}>
            <GridItem>
              <Box
                position="relative"
                pl={{ base: 10, md: 0 }}
                _before={{
                  content: '""',
                  position: "absolute",
                  left: { base: "16px", md: "50%" },
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  bg: timelineBg,
                  zIndex: 0,
                }}
              >
                {experiences.map((exp, index) => (
                  <MotionBox
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    mb={index === experiences.length - 1 ? 0 : 10}
                    position="relative"
                  >
                    <Flex
                      direction={{
                        base: "row",
                        md: index % 2 === 0 ? "row" : "row-reverse",
                      }}
                      align="flex-start"
                    >
                      <Box
                        position="absolute"
                        left={{ base: "-30px", md: "50%" }}
                        transform={{ md: "translateX(-50%)" }}
                        width="40px"
                        height="40px"
                        borderRadius="full"
                        bg={cardBg}
                        borderWidth="2px"
                        borderColor={primaryColor}
                        zIndex={1}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="bold"
                        color={primaryColor}
                        boxShadow="md"
                      >
                        <Icon as={FaBriefcase} w={4} h={4} />
                      </Box>

                      <Box
                        ml={{ base: 0, md: index % 2 === 0 ? 6 : 0 }}
                        mr={{ base: 0, md: index % 2 === 0 ? 0 : 6 }}
                        w={{ base: "100%", md: "calc(50% - 3rem)" }}
                        p={6}
                        bg={cardBg}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor={cardBorderColor}
                        boxShadow="md"
                        _hover={{
                          boxShadow: "lg",
                          transform: "translateY(-3px)",
                          transition: "all 0.3s ease",
                        }}
                        transition="all 0.3s ease"
                      >
                        <HStack justify="space-between" mb={2}>
                            <Heading
                                as="h4"
                                size="md"
                                color={primaryColor}
                            >
                                {exp.role}
                            </Heading>
                            <Text fontSize="sm" color={textColor} fontWeight="bold">
                                {exp.duration}
                            </Text>
                        </HStack>
                        
                        <HStack mb={4} spacing={2}>
                            <Icon as={FaBuilding} color={textColor} />
                            <Text fontWeight="medium" color={textColor}>
                            {exp.company}, {exp.location}
                            </Text>
                        </HStack>

                        <UnorderedList spacing={2} pl={4} color={textColor}>
                            {exp.description.map((desc, i) => (
                                <ListItem key={i}>{desc}</ListItem>
                            ))}
                        </UnorderedList>
                      </Box>
                    </Flex>
                  </MotionBox>
                ))}
              </Box>
            </GridItem>
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}
