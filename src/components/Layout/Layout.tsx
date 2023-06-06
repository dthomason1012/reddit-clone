import { FC } from "react";
import { Navbar } from "../Navbar/Navbar";

interface Props {
  children: any;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
