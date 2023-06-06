import { authModalState } from "@/atoms/authModalAtom";
import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { useSetRecoilState } from "recoil";

export const AuthButtons: FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <Button
        variant="outline"
        h="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => {
          setAuthModalState({ open: true, view: "login" });
        }}
      >
        Log In
      </Button>
      <Button
        h="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => {
          setAuthModalState({ open: true, view: "signup" });
        }}
      >
        Sign Up
      </Button>
    </>
  );
};
