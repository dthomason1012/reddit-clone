import { authModalState } from "@/atoms/authModalAtom";
import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

export const AuthInputs: FC = () => {
  const modalState = useRecoilValue(authModalState);
  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {modalState.view === "login" && <Login />}
      {modalState.view === "signup" && <SignUp />}
    </Flex>
  );
};
