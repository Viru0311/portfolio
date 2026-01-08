"use client";

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaMobile,
  FaTools,
  FaCheck,
} from "react-icons/fa";

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

const cardVariants = {
  initial: {
    y: 50,
    opacity: 0,
    rotateX: 10,
    scale: 0.95,
  },
  animate: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    y: -5,
    scale: 1.02,
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Skill categories with icons
const skillCategories = [
  {
    name: "Frontend",
    icon: FaCode,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Chakra UI",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    icon: FaServer,
    skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"],
  },
  {
    name: "Database",
    icon: FaDatabase,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
  },
  {
    name: "Mobile",
    icon: FaMobile,
    skills: [
      "React Native",
      "Flutter",
      "iOS Development",
      "Android Development",
    ],
  },
  {
    name: "Tools",
    icon: FaTools,
    skills: [
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "Netlify",
      "CI/CD",
      "Jest/Testing",
    ],
  },
];

export default function About() {
  // Theme colors based on color mode
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const headingColor = useColorModeValue("blue.600", "blue.300");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const tagBg = useColorModeValue("blue.50", "blue.900");
  const tagColor = useColorModeValue("blue.600", "blue.200");

  return (
    <Box
      as="section"
      id="about"
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
        opacity="0.08"
        zIndex="0"
      />
      <Box
        position="absolute"
        bottom="15%"
        right="10%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="blue.500"
        filter="blur(150px)"
        opacity="0.08"
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
            <Box>
              <Heading
                as="h2"
                size="2xl"
                mb={6}
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
                fontWeight="extrabold"
              >
                About Me
              </Heading>
              <Text
                fontSize="xl"
                maxW="3xl"
                mx="auto"
                color={textColor}
                lineHeight="tall"
              >
                A passionate software developer focused on creating elegant
                solutions with modern technologies
              </Text>
            </Box>
          </MotionBox>

          <Grid templateColumns={{ base: "1fr", lg: "1fr" }} gap={12}>
            {/* Bio Section */}
            <GridItem>
              <MotionBox
                as={motion.div}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                variants={cardVariants}
                p={8}
                bg={cardBg}
                borderRadius="xl"
                boxShadow="xl"
                border="1px"
                borderColor={cardBorderColor}
                height="100%"
                position="relative"
                _before={{
                  content: '""',
                  position: "absolute",
                  inset: "-1px",
                  zIndex: -1,
                  borderRadius: "xl",
                  background: "linear-gradient(135deg, blue.300, purple.500)",
                  opacity: 0.5,
                  filter: "blur(8px)",
                  transition: "all 0.3s ease",
                }}
              >
                <VStack alignItems="start" gap={6}>
                  <Heading
                    as="h3"
                    size="lg"
                    color={headingColor}
                    position="relative"
                    display="inline-block"
                    _after={{
                      content: '""',
                      position: "absolute",
                      bottom: "-8px",
                      left: "0",
                      width: "40px",
                      height: "3px",
                      background: "blue.400",
                      borderRadius: "full",
                    }}
                  >
                    Professional Summary
                  </Heading>

                  <Text color={textColor} fontSize="md" lineHeight="tall">
                    Backend Engineer with 2+ years of experience in building high-performance systems, distributed components, and internal developer tools.
                  </Text>

                  <Text color={textColor} fontSize="md" lineHeight="tall">
                    Strong DSA, problem-solving, Python/C++, and LLD skills with experience in API design and large-scale backend workflows.
                  </Text>

                  <Text color={textColor} fontSize="md" lineHeight="tall">
                    Expertise in Backup & Replication Workflows, API Integration, Data Protection Automation, System Diagnostics, Distributed Systems, and Distributed File Systems.
                  </Text>

                  <Box as="ul" width="100%">
                    {[
                      "Backend Engineer at Cohesity (Jul 2023 - Present)",
                      "B.Tech in Computer Science from NIT Trichy (CGPA: 8.23/10)",
                      "Strong foundation in Distributed Systems and Backend Engineering",
                      "Experience with Python, C++, Java, SQL, and Bash",
                      "Proven track record of improving system efficiency and reliability",
                    ].map((item, index) => (
                      <Box as="li" mb={index === 4 ? 0 : 3} key={index}>
                        <HStack gap={2}>
                          <Box>
                            <Icon as={FaCheck} color="green.500" boxSize={5} />
                          </Box>
                          <Text color={textColor}>{item}</Text>
                        </HStack>
                      </Box>
                    ))}
                  </Box>
                </VStack>
              </MotionBox>
            </GridItem>
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}
