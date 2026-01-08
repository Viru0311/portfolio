"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Tag,
  VStack,
  HStack,
  Icon,
  Button,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";

type IconProps = {
  [key: string]: any;
};

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
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  // Theme colors based on color mode
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const headingColor = useColorModeValue("blue.600", "blue.300");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const tagBg = useColorModeValue("blue.50", "blue.900");
  const tagColor = useColorModeValue("blue.600", "blue.200");
  const iconBg = useColorModeValue("blue.50", "blue.900");

  const projects = [
    {
      title: "RAG-BASED CHATBOT",
      description:
        "Developed a context-aware RAG-based chatbot using LangChain.js and Google Gemini AI for intelligent document-driven conversations. Implemented vector-based document search and retrieval using Supabase Vector Store.",
      tags: ["Next.js", "TypeScript", "Supabase", "LangChain", "Gemini AI"],
      image: "/slide.jpeg", // Using a placeholder for now as per instructions
      github: "https://github.com/yvirendra",
      live: "https://chatbot-ten-drab-28.vercel.app/",
      icon: (props: IconProps) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
    },
    {
      title: "Inventory & Billing Management System",
      description:
        "Developing a SaaS-based Inventory & Billing Management System using FastAPI and Next.js to automate business workflows for small enterprises.",
      tags: ["FastAPI", "Next.js", "SaaS", "Automation"],
      image: "/splitwise.png", // Placeholder
      github: "https://github.com/yvirendra",
      // live: "",
      icon: (props: IconProps) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      ),
    },
    {
      title: "PREP - INTERVIEW",
      description:
        "Developed a website for sharing interview experiences and questions. Implemented user authentication using JSON Web Tokens. Built using Node.js, Express.js, MongoDB, and EJS Template.",
      tags: ["Node.js", "Express.js", "MongoDB", "EJS", "JWT"],
      image: "/EduFocus.png", // Placeholder
      github: "https://github.com/yvirendra",
      live: "",
      icon: (props: IconProps) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
    },
  ];

  return (
    <Box
      as="section"
      id="projects"
      py={20}
      bg={sectionBg}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="blue.500"
        filter="blur(150px)"
        opacity="0.07"
        zIndex="0"
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="purple.500"
        filter="blur(150px)"
        opacity="0.07"
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
                My Projects
              </Heading>
              <Text
                fontSize="xl"
                maxW="3xl"
                mx="auto"
                color={textColor}
                lineHeight="tall"
              >
                Here are some of the projects I've worked on. Each one
                represents a different challenge and learning experience.
              </Text>
            </Box>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {projects.map((project, index) => (
              <MotionBox
                key={index}
                as={motion.div}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                custom={index}
              >
                <Box
                  borderRadius="xl"
                  overflow="hidden"
                  bg={cardBg}
                  borderWidth="1px"
                  borderColor={cardBorderColor}
                  boxShadow="lg"
                  height="100%"
                  position="relative"
                  transition="all 0.3s"
                  _hover={{
                    boxShadow: "xl",
                    borderColor: "blue.300",
                  }}
                >
                  <Box
                    h="200px"
                    position="relative"
                    overflow="hidden"
                    bgGradient="linear(to-r, blue.50, purple.50)"
                  >
                    {project.image && (
                      <Box
                        as={motion.div}
                        position="absolute"
                        inset="0"
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                    )}
                  </Box>

                  <Box p={6}>
                    <HStack mb={4} spacing={3}>
                      <Box
                        p={2}
                        bg={iconBg}
                        color={headingColor}
                        borderRadius="md"
                      >
                        <Icon as={project.icon} boxSize={5} />
                      </Box>
                      <Heading
                        as="h3"
                        size="md"
                        color={headingColor}
                        fontWeight="bold"
                      >
                        {project.title}
                      </Heading>
                    </HStack>

                    <Text color={textColor} mb={4} fontSize="md">
                      {project.description}
                    </Text>

                    <Box mb={6}>
                      <Flex flexWrap="wrap" gap={2}>
                        {project.tags.map((tag, i) => (
                          <Tag
                            key={i}
                            size="md"
                            borderRadius="full"
                            bg={tagBg}
                            color={tagColor}
                            fontWeight="medium"
                            px={3}
                            py={1}
                          >
                            {tag}
                          </Tag>
                        ))}
                      </Flex>
                    </Box>

                    <Flex
                      pt={4}
                      borderTop="1px"
                      borderColor={cardBorderColor}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <HStack spacing={3}>
                        {project.github && (
                          <Button
                            as="a"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="ghost"
                            size="sm"
                            leftIcon={<FaGithub />}
                            color={headingColor}
                          >
                            GitHub
                          </Button>
                        )}
                        {project.live && (
                          <Button
                            as="a"
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="ghost"
                            size="sm"
                            leftIcon={<FaExternalLinkAlt />}
                            color={headingColor}
                          >
                            Live Demo
                          </Button>
                        )}
                      </HStack>
                      <Button
                        as="a"
                        href={project.github || project.live || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="ghost"
                        size="sm"
                        rightIcon={<HiOutlineArrowRight />}
                        color={headingColor}
                      >
                        View Details
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
}
