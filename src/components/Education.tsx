"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Flex,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
  Icon,
  useColorModeValue,
  chakra,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaTrophy, FaHeart, FaCheck } from "react-icons/fa";

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

export default function Education() {
  // Theme colors based on color mode
  const sectionBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("blue.600", "blue.300");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const primaryColor = useColorModeValue("blue.500", "blue.300");
  const timelineBg = useColorModeValue("gray.200", "gray.700");
  const timelineItemBg = useColorModeValue("blue.50", "blue.900");
  const timelineItemBorder = useColorModeValue("blue.200", "blue.700");

  const education = [
    {
      institution: "National Institute of Technology",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "May 2023",
      description:
        "Trichy, Tamilnadu. CGPA: 8.23/10",
    },
  ];

  const achievements = [
    "Treasurer, Maximus'23 | Mathematics Club - NIT Trichy",
    "Head of Events, Vortex'23 | National Level Technical Symposium",
    "Managed budgeting, audit reporting, and club finances",
    "Conducted coding and mathematics competitions (Math Buzz, Codemax)",
    "Mentored junior students in mathematics & programming",
  ];

  const hobbies = [
    "Competitive Programming",
    "System Design",
    "Open Source",
    "Tech Blogging",
  ];

  return (
    <Box
      as="section"
      id="education"
      py={20}
      bg={sectionBg}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="15%"
        left="10%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="purple.500"
        filter="blur(150px)"
        opacity="0.05"
        zIndex="0"
      />
      <Box
        position="absolute"
        bottom="15%"
        right="10%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="blue.500"
        filter="blur(150px)"
        opacity="0.05"
        zIndex="0"
      />

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
              Education & Leadership
            </Heading>
            <Text
              fontSize="xl"
              maxW="3xl"
              mx="auto"
              color={textColor}
              lineHeight="tall"
            >
              My academic background and leadership roles that have shaped my professional journey.
            </Text>
          </MotionBox>

          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={10}>
            {/* Education Section */}
            <GridItem>
              <MotionBox variants={itemVariants}>
                <HStack mb={6} spacing={3} align="center">
                  <Icon as={FaGraduationCap} color={primaryColor} boxSize={6} />
                  <Heading as="h3" size="lg" color={headingColor}>
                    Education
                  </Heading>
                </HStack>

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
                  {education.map((item, index) => (
                    <MotionBox
                      key={index}
                      variants={itemVariants}
                      custom={index}
                      mb={index === education.length - 1 ? 0 : 10}
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
                          {index + 1}
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
                          position={{
                            md: index % 2 === 0 ? "relative" : "relative",
                          }}
                          left={{ md: index % 2 === 0 ? 0 : "50%" }}
                          _hover={{
                            boxShadow: "lg",
                            transform: "translateY(-3px)",
                            transition: "all 0.3s ease",
                          }}
                          transition="all 0.3s ease"
                        >
                          <Heading
                            as="h4"
                            size="md"
                            color={primaryColor}
                            mb={1}
                          >
                            {item.institution}
                          </Heading>
                          <Text fontWeight="medium" mb={1}>
                            {item.degree}
                          </Text>
                          <Text
                            fontSize="sm"
                            color={textColor}
                            opacity={0.8}
                            mb={3}
                          >
                            {item.duration}
                          </Text>
                          <Text color={textColor}>{item.description}</Text>
                        </Box>
                      </Flex>
                    </MotionBox>
                  ))}
                </Box>
              </MotionBox>
            </GridItem>

            {/* Achievements Section */}
            <GridItem>
              <MotionBox variants={itemVariants}>
                <HStack mb={6} spacing={3} align="center">
                  <Icon as={FaTrophy} color={primaryColor} boxSize={6} />
                  <Heading as="h3" size="lg" color={headingColor}>
                    Achievements
                  </Heading>
                </HStack>

                <Box
                  p={6}
                  bg={cardBg}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor={cardBorderColor}
                  boxShadow="md"
                  transition="all 0.3s ease"
                  _hover={{
                    boxShadow: "lg",
                    borderColor: "blue.300",
                  }}
                >
                  <List spacing={4}>
                    {achievements.map((achievement, index) => (
                      <MotionBox
                        key={index}
                        variants={itemVariants}
                        custom={index}
                        as={ListItem}
                        display="flex"
                        alignItems="flex-start"
                      >
                        <ListIcon
                          as={FaCheck}
                          color={primaryColor}
                          mt={1}
                          bg={timelineItemBg}
                          p={1}
                          boxSize={5}
                          borderRadius="full"
                        />
                        <Text ml={2}>{achievement}</Text>
                      </MotionBox>
                    ))}
                  </List>

                  <Divider my={6} borderColor={cardBorderColor} />

                  <HStack mb={4} spacing={3} align="center">
                    <Icon as={FaHeart} color={primaryColor} boxSize={5} />
                    <Heading as="h4" size="md" color={headingColor}>
                      Hobbies & Interests
                    </Heading>
                  </HStack>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                    {hobbies.map((hobby, index) => (
                      <MotionBox
                        key={index}
                        variants={itemVariants}
                        custom={index}
                        as={HStack}
                        spacing={2}
                      >
                        <Box
                          width="8px"
                          height="8px"
                          borderRadius="full"
                          bg={primaryColor}
                        />
                        <Text>{hobby}</Text>
                      </MotionBox>
                    ))}
                  </SimpleGrid>
                </Box>
              </MotionBox>
            </GridItem>
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}
