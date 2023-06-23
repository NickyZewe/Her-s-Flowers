import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventPage = () => {
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event: any) => {
    event.preventDefault();

    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7afbb6fd-5362-4c43-8b5d-5034b605f38c");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      navigate("/success");
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <Flex px={10} py={5}>
      <VStack justify={"center"} align={"left"} p={5}>
        <Heading>Contact Us</Heading>
        <Text>
          If you're inquiring about an event or custom project, please fill out
          the form below and someone will be in touch with you within 48 hours.
          If you just want to order a single arrangement for delivery or pickup,
          place your order through our web shop. For all other inquiries email
          us at .
        </Text>
        <Box border={"solid"} borderColor={"#c7c7c7"} p={5} borderRadius={20}>
          <VStack justify={"center"} align={"left"}>
            <Heading> Event Inquiry </Heading>
            <Text>
              Thank you for considering us for your floral project! After we
              recieve below information, someone from our team will be in touch
              within 48 hours.
            </Text>
            <Text>
              Please note that we have an $500 minimum for non-wedding custom
              events, floral projects, and custom orders. For weddings we have a
              $2000 minimum. If your budget is under $500, you can still order
              flowers through our web shop!
            </Text>
            <Text>Thank you and we look forward to hearing from you!</Text>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={onSubmit}
            >
              <input
                type="hidden"
                name="access_key"
                value="7afbb6fd-5362-4c43-8b5d-5034b605f38c"
              />

              <FormControl isRequired>
                <FormLabel pt={5}>First name</FormLabel>
                <Input
                  placeholder="First name"
                  type="text"
                  name=" First name"
                />
                <FormLabel pt={5}>Last name</FormLabel>
                <Input placeholder="Last name" type="text" name=" Last name" />
                <FormLabel pt={5}>Email</FormLabel>
                <Input placeholder="Email" type="email" name="email" />
                <FormLabel pt={5}>
                  Describe Your Event (What type of event? Where is event taking
                  place? Is there a style you have in mind?)
                </FormLabel>
                <Input
                  placeholder="Describe Your Event"
                  type="text"
                  name="Event Description"
                />
                <FormLabel pt={5}>
                  Event Date (If date TBD, please put potential date)
                </FormLabel>
                <Input />
                <FormLabel pt={5}>Event Floral Budget</FormLabel>
                <Select pb={5} placeholder="Please Select" name="Budget Range">
                  <option value="$500 - $800">$500 - $800</option>
                  <option value="$800 - $1,000">$800 - $1,000</option>
                  <option value="$1,000 - $1,500">$1,000 - $1,500</option>
                  <option value="1,500 - $2,000">$1,500 - $2,000</option>
                  <option value="$2,500 - $3,000">$2,500 - $3,000</option>
                  <option value="$3,000 - $4,000">$3,000 - $4,000</option>
                  <option value="$4,000 - $5,000">$4,000 - $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </Select>
              </FormControl>
              <Input
                type="submit"
                _hover={{
                  transform: "scale(1.03)",
                  transition: "transform .15s ease-in",
                  cursor: "pointer",
                }}
              />
            </form>
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
};

export default EventPage;
