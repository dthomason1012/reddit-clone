import { Flex, Button, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";

export const OAuthButtons: FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction="column" width-="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/images/googlelogo.png" h="20px" mr={4} />
        Continue with Google
      </Button>
      <Text>{error?.message}</Text>
    </Flex>
  );
};
