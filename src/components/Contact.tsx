"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  Link,
  useColorModeValue,
  chakra,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLink,
  FaGithub,
  FaLinkedin,
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

export default function Contact() {
  // Theme colors based on color mode
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const headingColor = useColorModeValue("blue.600", "blue.300");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const primaryColor = useColorModeValue("blue.500", "blue.300");
  const iconBg = useColorModeValue("blue.50", "blue.900");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <Box
      as="section"
      id="contact"
      py={20}
      bg={sectionBg}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="15%"
        right="10%"
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
        left="10%"
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
              Get In Touch
            </Heading>
            <Text
              fontSize="xl"
              maxW="3xl"
              mx="auto"
              color={textColor}
              lineHeight="tall"
            >
              Have a question or want to work together? Feel free to contact me!
            </Text>
          </MotionBox>

          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={10}>
            {/* Contact Information */}
            <GridItem>
              <MotionBox variants={itemVariants}>
                <Heading as="h3" size="lg" color={headingColor} mb={6}>
                  Contact Information
                </Heading>

                <VStack spacing={8} align="stretch">
                  <MotionBox
                    variants={itemVariants}
                    as={HStack}
                    spacing={4}
                    align="flex-start"
                  >
                    <Flex
                      w="50px"
                      h="50px"
                      bg={iconBg}
                      color={primaryColor}
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="lg"
                      flexShrink={0}
                    >
                      <Icon as={FaEnvelope} boxSize={5} />
                    </Flex>
                    <Box>
                      <Heading as="h4" size="md" mb={1}>
                        Email
                      </Heading>
                      <Link
                        href="mailto:yvirendra575@gmail.com"
                        color={textColor}
                        _hover={{ color: primaryColor }}
                        transition="all 0.3s ease"
                      >
                        yvirendra575@gmail.com
                      </Link>
                    </Box>
                  </MotionBox>

                  <MotionBox
                    variants={itemVariants}
                    as={HStack}
                    spacing={4}
                    align="flex-start"
                  >
                    <Flex
                      w="50px"
                      h="50px"
                      bg={iconBg}
                      color={primaryColor}
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="lg"
                      flexShrink={0}
                    >
                      <Icon as={FaMapMarkerAlt} boxSize={5} />
                    </Flex>
                    <Box>
                      <Heading as="h4" size="md" mb={1}>
                        Location
                      </Heading>
                      <Text color={textColor}>
                        Bangalore, India
                      </Text>
                    </Box>
                  </MotionBox>

                  <MotionBox
                    variants={itemVariants}
                    as={HStack}
                    spacing={4}
                    align="flex-start"
                  >
                    <Flex
                      w="50px"
                      h="50px"
                      bg={iconBg}
                      color={primaryColor}
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="lg"
                      flexShrink={0}
                    >
                      <Icon as={FaLink} boxSize={5} />
                    </Flex>
                    <Box>
                      <Heading as="h4" size="md" mb={2}>
                        Social Profiles
                      </Heading>
                      <HStack spacing={4}>
                        <Link
                          href="https://github.com/yvirendra"
                          target="_blank"
                          rel="noopener noreferrer"
                          color={textColor}
                          _hover={{ color: primaryColor }}
                          transition="all 0.3s ease"
                        >
                          <Icon as={FaGithub} boxSize={6} />
                        </Link>
                        <Link
                          href="https://linkedin.com/in/virendra-yadav"
                          target="_blank"
                          rel="noopener noreferrer"
                          color={textColor}
                          _hover={{ color: primaryColor }}
                          transition="all 0.3s ease"
                        >
                          <Icon as={FaLinkedin} boxSize={6} />
                        </Link>
                      </HStack>
                    </Box>
                  </MotionBox>
                </VStack>
              </MotionBox>
            </GridItem>

            {/* Contact Form */}
            <GridItem>
              <MotionBox variants={itemVariants}>
                <Heading as="h3" size="lg" color={headingColor} mb={6}>
                  Send Me a Message
                </Heading>

                <Box
                  as="form"
                  onSubmit={handleSubmit}
                  p={8}
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
                  <VStack spacing={6}>
                    <SimpleGrid
                      columns={{ base: 1, md: 2 }}
                      spacing={6}
                      w="full"
                    >
                      <MotionBox variants={itemVariants}>
                        <FormControl isRequired>
                          <FormLabel fontWeight="medium">Your Name</FormLabel>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            bg={useColorModeValue("white", "gray.700")}
                            borderColor={cardBorderColor}
                            _hover={{ borderColor: primaryColor }}
                            _focus={{
                              borderColor: primaryColor,
                              boxShadow: "outline",
                            }}
                            variant="filled"
                          />
                        </FormControl>
                      </MotionBox>

                      <MotionBox variants={itemVariants}>
                        <FormControl isRequired>
                          <FormLabel fontWeight="medium">Your Email</FormLabel>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            bg={useColorModeValue("white", "gray.700")}
                            borderColor={cardBorderColor}
                            _hover={{ borderColor: primaryColor }}
                            _focus={{
                              borderColor: primaryColor,
                              boxShadow: "outline",
                            }}
                            variant="filled"
                          />
                        </FormControl>
                      </MotionBox>
                    </SimpleGrid>

                    <MotionBox variants={itemVariants} w="full">
                      <FormControl isRequired>
                        <FormLabel fontWeight="medium">Subject</FormLabel>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          bg={useColorModeValue("white", "gray.700")}
                          borderColor={cardBorderColor}
                          _hover={{ borderColor: primaryColor }}
                          _focus={{
                            borderColor: primaryColor,
                            boxShadow: "outline",
                          }}
                          variant="filled"
                        />
                      </FormControl>
                    </MotionBox>

                    <MotionBox variants={itemVariants} w="full">
                      <FormControl isRequired>
                        <FormLabel fontWeight="medium">Message</FormLabel>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          bg={useColorModeValue("white", "gray.700")}
                          borderColor={cardBorderColor}
                          _hover={{ borderColor: primaryColor }}
                          _focus={{
                            borderColor: primaryColor,
                            boxShadow: "outline",
                          }}
                          variant="filled"
                        />
                      </FormControl>
                    </MotionBox>

                    <MotionBox variants={itemVariants} alignSelf="flex-start">
                      <Button
                        type="submit"
                        colorScheme="blue"
                        size="lg"
                        isLoading={isSubmitting}
                        loadingText="Sending..."
                        bgGradient="linear(to-r, blue.400, purple.500)"
                        _hover={{
                          bgGradient: "linear(to-r, blue.500, purple.600)",
                          transform: "translateY(-2px)",
                          boxShadow: "lg",
                        }}
                        _active={{
                          bgGradient: "linear(to-r, blue.600, purple.700)",
                          transform: "translateY(0)",
                        }}
                        transition="all 0.3s ease"
                      >
                        Send Message
                      </Button>
                    </MotionBox>

                    {submitSuccess && (
                      <MotionBox
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        p={4}
                        bg="green.50"
                        color="green.700"
                        borderRadius="md"
                        borderLeftWidth="4px"
                        borderLeftColor="green.500"
                        w="full"
                      >
                        <Text fontWeight="medium">
                          Your message has been sent successfully! I'll get back
                          to you soon.
                        </Text>
                      </MotionBox>
                    )}

                    {submitError && (
                      <MotionBox
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        p={4}
                        bg="red.50"
                        color="red.700"
                        borderRadius="md"
                        borderLeftWidth="4px"
                        borderLeftColor="red.500"
                        w="full"
                      >
                        <Text fontWeight="medium">{submitError}</Text>
                      </MotionBox>
                    )}
                  </VStack>
                </Box>
              </MotionBox>
            </GridItem>
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}
