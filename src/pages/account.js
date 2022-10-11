import React, { useContext } from "react";
import { General } from "views/Account";
import FourOFourPage from "./404";
import { WalletContext } from "blocks/Web3Auth/config";

const AccountPage = () => {
  const { connected } = useContext(WalletContext);
  return connected ? <General /> : <FourOFourPage />;
};
export default AccountPage;
