import { Container, Text, VStack, Box, Heading, Button, IconButton, Image, HStack, Link } from "@chakra-ui/react";
import { FaRobot, FaChartLine, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            AI Trading Bot
          </Heading>
          <Text fontSize="lg">Automated Forex Trading at Your Fingertips</Text>
        </Box>

        <Image src="https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3JleCUyMHRyYWRpbmd8ZW58MHx8fHwxNzE3NjA4NjY2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Forex Trading" borderRadius="md" boxShadow="md" />

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={2}>
            Features
          </Heading>
          <VStack spacing={4}>
            <HStack spacing={2}>
              <FaRobot />
              <Text>AI-Powered Trading Algorithms</Text>
            </HStack>
            <HStack spacing={2}>
              <FaChartLine />
              <Text>Real-Time Market Analysis</Text>
            </HStack>
          </VStack>
        </Box>

        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={2}>
            Connect with Me
          </Heading>
          <HStack spacing={4} justifyContent="center">
            <Link href="https://github.com" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
