import { Button, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { AuthButtons } from "./AuthButtons";
import { AuthModal } from "@/components/Modal/Auth/AuthModal";
import { User, signOut } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import { Icons } from "./Icons";
import { UserMenu } from "./UserMenu";

interface RightContentProps {
  user?: User | null;
}

export const RightContent: FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
