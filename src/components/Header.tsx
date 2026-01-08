"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  Heading,
  HStack,
  chakra,
} from "@chakra-ui/react";
import { useTheme } from "@/context/ThemeContext";

// Custom chakra Link component that works with Next.js
const ChakraLink = chakra(Link, {
  shouldForwardProp: (prop) =>
    ["href", "target", "children", "onClick"].includes(prop),
});

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const { theme } = useTheme();

  // Color values based on theme
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1000}
      bg={useColorModeValue(
        "rgba(255, 255, 255, 0.8)",
        "rgba(26, 32, 44, 0.8)"
      )}
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor={borderColor}
      shadow="sm"
      transition="all 0.3s"
    >
      <Container maxW="container.xl" py={3}>
        <Flex align="center" justify="space-between">
          {/* Logo */}
          <ChakraLink href="/" _hover={{ textDecoration: "none" }}>
            <Heading
              as="h1"
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, primary.500, secondary.500)"
              bgClip="text"
              letterSpacing="tight"
            >
              Virendra Yadav
            </Heading>
          </ChakraLink>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            <ChakraLink
              href="#about"
              fontWeight="medium"
              color={textColor}
              _hover={{ color: "primary.500", transform: "translateY(-2px)" }}
              transition="all 0.2s"
              display="inline-block"
            >
              About
            </ChakraLink>
            <ChakraLink
              href="#skills"
              fontWeight="medium"
              color={textColor}
              _hover={{ color: "primary.500", transform: "translateY(-2px)" }}
              transition="all 0.2s"
              display="inline-block"
            >
              Skills
            </ChakraLink>
            <ChakraLink
              href="#experience"
              fontWeight="medium"
              color={textColor}
              _hover={{ color: "primary.500", transform: "translateY(-2px)" }}
              transition="all 0.2s"
              display="inline-block"
            >
              Experience
            </ChakraLink>
            <ChakraLink
              href="#projects"
              fontWeight="medium"
              color={textColor}
              _hover={{ color: "primary.500", transform: "translateY(-2px)" }}
              transition="all 0.2s"
              display="inline-block"
            >
              Projects
            </ChakraLink>
            <ChakraLink
              href="#education"
              fontWeight="medium"
              color={textColor}
              _hover={{ color: "primary.500", transform: "translateY(-2px)" }}
              transition="all 0.2s"
              display="inline-block"
            >
              Education
            </ChakraLink>
            <ChakraLink
              href="#contact"
              fontWeight="medium"
              color={textColor}
              _hover={{ color: "primary.500", transform: "translateY(-2px)" }}
              transition="all 0.2s"
              display="inline-block"
            >
              Contact
            </ChakraLink>
            <ThemeToggle />
            <Button
              as="a"
              href="/virendra_cv.pdf"
              target="_blank"
              colorScheme="primary"
              size="md"
              fontWeight="medium"
              rightIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              }
            >
              Resume
            </Button>
          </HStack>

          {/* Mobile Menu Toggle */}
          <Flex display={{ base: "flex", md: "none" }} align="center" gap={2}>
            <ThemeToggle />
            <IconButton
              aria-label="Toggle Navigation"
              icon={
                isOpen ? (
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
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
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
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )
              }
              variant="ghost"
              onClick={onToggle}
            />
          </Flex>
        </Flex>

        {/* Mobile Navigation */}
        <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4} pt={4}>
              <ChakraLink
                href="#about"
                fontWeight="medium"
                px={2}
                py={1}
                rounded="md"
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                onClick={onToggle}
              >
                About
              </ChakraLink>
              <ChakraLink
                href="#skills"
                fontWeight="medium"
                px={2}
                py={1}
                rounded="md"
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                onClick={onToggle}
              >
                Skills
              </ChakraLink>
              <ChakraLink
                href="#experience"
                fontWeight="medium"
                px={2}
                py={1}
                rounded="md"
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                onClick={onToggle}
              >
                Experience
              </ChakraLink>
              <ChakraLink
                href="#projects"
                fontWeight="medium"
                px={2}
                py={1}
                rounded="md"
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                onClick={onToggle}
              >
                Projects
              </ChakraLink>
              <ChakraLink
                href="#education"
                fontWeight="medium"
                px={2}
                py={1}
                rounded="md"
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                onClick={onToggle}
              >
                Education
              </ChakraLink>
              <ChakraLink
                href="#contact"
                fontWeight="medium"
                px={2}
                py={1}
                rounded="md"
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                onClick={onToggle}
              >
                Contact
              </ChakraLink>
              <Button
                as="a"
                href="/virendra_cv.pdf"
                target="_blank"
                size="sm"
                width="full"
                leftIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                }
              >
                Resume
              </Button>
            </Stack>
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
}
