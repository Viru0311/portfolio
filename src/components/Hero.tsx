"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  chakra,
  Highlight,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const MotionBox = chakra(motion.div);

export default function Hero() {
  // Color values based on the theme
  const bgGradient = useColorModeValue(
    "linear(to-r, gray.100, blue.50, purple.50)",
    "linear(to-r, gray.900, blue.900, purple.900)"
  );
  const headingColor = useColorModeValue("blue.600", "blue.300");
  const highlightColor = useColorModeValue("purple.500", "purple.300");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const buttonBg = useColorModeValue("blue.500", "blue.400");
  const buttonHoverBg = useColorModeValue("blue.600", "blue.500");
  const secondaryButtonBg = useColorModeValue("white", "gray.800");
  const secondaryButtonColor = useColorModeValue("gray.800", "white");
  const secondaryButtonBorder = useColorModeValue("gray.300", "gray.600");
  const secondaryButtonHoverBg = useColorModeValue("gray.100", "gray.700");
  const iconButtonBg = useColorModeValue("gray.100", "gray.800");
  const iconButtonHoverBg = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      as="section"
      id="hero"
      minH="100vh"
      display="flex"
      alignItems="center"
      pt={{ base: 20, md: 0 }}
      bgGradient={bgGradient}
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration elements */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="blue.500"
        filter="blur(120px)"
        opacity="0.1"
        zIndex="0"
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        w="250px"
        h="250px"
        borderRadius="full"
        bg="purple.500"
        filter="blur(100px)"
        opacity="0.1"
        zIndex="0"
      />

      <Container maxW="container.xl" zIndex="1">
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={{ base: "2.5rem", lg: "4rem" }}
        >
          {/* Text content */}
          <MotionBox variants={itemVariants} flex="1">
            <VStack spacing={6} align="flex-start">
              <Box>
                <MotionBox variants={itemVariants}>
                  <Text
                    as="span"
                    display="inline-block"
                    px={3}
                    py={1}
                    bg={useColorModeValue("blue.100", "blue.900")}
                    color={useColorModeValue("blue.800", "blue.200")}
                    fontWeight="medium"
                    fontSize="sm"
                    rounded="full"
                    mb={4}
                  >
                    Backend Engineer
                  </Text>
                </MotionBox>

                <MotionBox variants={itemVariants}>
                  <Heading
                    as="h1"
                    size={{ base: "xl", md: "2xl" }}
                    fontWeight="bold"
                    lineHeight="shorter"
                    mb={4}
                  >
                    <Highlight
                      query="Virendra Yadav."
                      styles={{ color: headingColor, fontWeight: "800" }}
                    >
                      Hi, I'm Virendra Yadav.
                    </Highlight>
                  </Heading>
                </MotionBox>

                <MotionBox variants={itemVariants}>
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    color={textColor}
                    lineHeight="tall"
                    mb={6}
                    maxW="600px"
                  >
                    Member of Technical Staff 2 at Cohesity. I specialize in building high-performance systems, distributed components, and internal developer tools.
                  </Text>
                </MotionBox>
              </Box>

              <MotionBox variants={itemVariants}>
                <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
                  <Button
                    leftIcon={<HiDownload />}
                    rounded="md"
                    size="lg"
                    bg={buttonBg}
                    color="white"
                    _hover={{ bg: buttonHoverBg }}
                    _active={{ transform: "scale(0.98)" }}
                    as="a"
                    href="/virendra_cv.pdf"
                    target="_blank"
                    fontWeight="medium"
                    px={6}
                  >
                    Download Resume
                  </Button>

                  <Button
                    as="a"
                    href="#contact"
                    rounded="md"
                    size="lg"
                    bg={secondaryButtonBg}
                    color={secondaryButtonColor}
                    borderWidth="1px"
                    borderColor={secondaryButtonBorder}
                    _hover={{ bg: secondaryButtonHoverBg }}
                    _active={{ transform: "scale(0.98)" }}
                    fontWeight="medium"
                    px={6}
                  >
                    Contact Me
                  </Button>
                </Stack>
              </MotionBox>

              <MotionBox variants={itemVariants} pt={2}>
                <Stack direction="row" spacing={3}>
                  <Button
                    as="a"
                    href="https://github.com/yvirendra"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    rounded="full"
                    size="md"
                    p={3}
                    bg={iconButtonBg}
                    color={secondaryButtonColor}
                    _hover={{ bg: iconButtonHoverBg }}
                    leftIcon={<FaGithub size={20} />}
                    iconSpacing={0}
                  >
                    <Text display={{ base: "none", md: "block" }} ml={2}>
                      GitHub
                    </Text>
                  </Button>

                  <Button
                    as="a"
                    href="https://linkedin.com/in/virendra-yadav"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    rounded="full"
                    size="md"
                    p={3}
                    bg={iconButtonBg}
                    color={secondaryButtonColor}
                    _hover={{ bg: iconButtonHoverBg }}
                    leftIcon={<FaLinkedin size={20} />}
                    iconSpacing={0}
                  >
                    <Text display={{ base: "none", md: "block" }} ml={2}>
                      LinkedIn
                    </Text>
                  </Button>
                </Stack>
              </MotionBox>
            </VStack>
          </MotionBox>

          {/* Profile image */}
          <MotionBox
            variants={itemVariants}
            position="relative"
            width={{ base: "300px", md: "400px", lg: "450px" }}
            height={{ base: "300px", md: "400px", lg: "450px" }}
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              borderRadius="full"
              overflow="hidden"
              bg={useColorModeValue("white", "gray.800")}
              boxShadow="xl"
              zIndex="1"
            >
              <Image
                src="/my photo.jpeg"
                alt="Virendra Yadav"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
            <Box
              position="absolute"
              inset="-15px"
              borderRadius="full"
              background="linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
              opacity="0.6"
              zIndex="0"
            />
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
