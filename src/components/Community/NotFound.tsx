import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

export const CommunityNotFound: FC = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    >
      Sorry, that community does not exist
      <Link href="/">
        <Button mt={4}>GO HOME</Button>
      </Link>
    </Flex>
  );
};
