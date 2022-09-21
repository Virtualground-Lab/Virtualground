import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Account } from "layouts/Main/components/Topbar/components";
import {WalletContextValues, WalletContext} from "./config";


const Login = () => {

const {
        web3AuthType,
        isLoading,
        connected,
        accountAddress,
        accountBalance,
        login,
        logout,
    }: WalletContextValues = useContext(WalletContext);

  return (
    <div className="container">
      {connected ? (
        <Account
          username="Choose Username"
          photoURL="https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_default.jpg"
          address={accountAddress}
          handleLogout={logout}
        />
      ) : (
        <IconButton onClick={login} size="medium">
          <AccountBalanceWalletIcon fontSize="large" color={"primary"} />
        </IconButton>
      )}
    </div>
  );
};

export default Login;
