"use client";

import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Icon,
  Divider,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import NextLink from "next/link";

// Motion components
const MotionBox = chakra(motion.div);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Theme colors based on color mode
  const footerBg = useColorModeValue("gray.50", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const headingColor = useColorModeValue("blue.600", "blue.300");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const iconColor = useColorModeValue("gray.600", "gray.400");
  const iconHoverColor = useColorModeValue("blue.500", "blue.300");
  const linkColor = useColorModeValue("gray.600", "gray.400");
  const linkHoverColor = useColorModeValue("blue.500", "blue.300");
  const scrollTopBg = useColorModeValue("blue.500", "blue.400");
  const scrollTopHoverBg = useColorModeValue("blue.600", "blue.500");

  // Navigation links
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/yvirendra",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/virendra-yadav",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:yvirendra575@gmail.com",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      as="footer"
      bg={footerBg}
      borderTop="1px"
      borderColor={borderColor}
      py={12}
      position="relative"
    >
      <Container maxW="container.xl">
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={12}>
            {/* About Column */}
            <MotionBox variants={itemVariants}>
              <VStack align="flex-start" spacing={4}>
                <Heading
                  as="h3"
                  size="md"
                  color={headingColor}
                  fontWeight="bold"
                >
                  Virendra Yadav
                </Heading>
                <Text color={textColor} fontSize="sm" maxW="xs">
                  Backend Engineer focused on building high-performance systems and distributed components.
                </Text>
                <HStack spacing={4} mt={2}>
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      isExternal
                      aria-label={social.name}
                    >
                      <Icon
                        as={social.icon}
                        boxSize={5}
                        color={iconColor}
                        _hover={{ color: iconHoverColor }}
                        transition="all 0.3s ease"
                      />
                    </Link>
                  ))}
                </HStack>
              </VStack>
            </MotionBox>

            {/* Quick Links */}
            <MotionBox variants={itemVariants}>
              <VStack align="flex-start" spacing={4}>
                <Heading
                  as="h3"
                  size="md"
                  color={headingColor}
                  fontWeight="bold"
                >
                  Quick Links
                </Heading>
                <Stack spacing={2}>
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      as={NextLink}
                      href={link.href}
                      color={linkColor}
                      _hover={{ color: linkHoverColor, textDecoration: "none" }}
                      fontWeight="medium"
                      fontSize="sm"
                      transition="all 0.3s ease"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              </VStack>
            </MotionBox>

            {/* Contact Info */}
            <MotionBox variants={itemVariants}>
              <VStack align="flex-start" spacing={4}>
                <Heading
                  as="h3"
                  size="md"
                  color={headingColor}
                  fontWeight="bold"
                >
                  Contact
                </Heading>
                <VStack align="flex-start" spacing={2}>
                  <Text color={textColor} fontSize="sm">
                    Bangalore, India
                  </Text>
                  <Link
                    href="mailto:yvirendra575@gmail.com"
                    color={linkColor}
                    _hover={{ color: linkHoverColor }}
                    fontSize="sm"
                  >
                    yvirendra575@gmail.com
                  </Link>
                </VStack>
              </VStack>
            </MotionBox>

            {/* About Website */}
            <MotionBox variants={itemVariants}>
              <VStack align="flex-start" spacing={4}>
                <Heading
                  as="h3"
                  size="md"
                  color={headingColor}
                  fontWeight="bold"
                >
                  About This Site
                </Heading>
                <Text color={textColor} fontSize="sm">
                  Built with Next.js, Chakra UI, and Framer Motion. Deployed
                  with Vercel.
                </Text>
                <Box>
                  <Link
                    onClick={scrollToTop}
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    bg={scrollTopBg}
                    color="white"
                    w="40px"
                    h="40px"
                    borderRadius="md"
                    _hover={{
                      bg: scrollTopHoverBg,
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.3s ease"
                    boxShadow="md"
                    cursor="pointer"
                  >
                    <Icon as={FaArrowUp} />
                  </Link>
                </Box>
              </VStack>
            </MotionBox>
          </SimpleGrid>

          <Divider borderColor={borderColor} mb={6} />

          <MotionBox variants={itemVariants}>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify={{ base: "center", md: "space-between" }}
              align="center"
              textAlign={{ base: "center", md: "left" }}
              gap={{ base: 4, md: 0 }}
            >


            </Flex>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
