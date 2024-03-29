import  React,{ createContext, useCallback, useEffect, useState} from "react";
import IconButton from "@mui/material/IconButton";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Account } from "layouts/Main/components/Topbar/components";
import { Web3Auth } from "@web3auth/web3auth";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import {ADAPTER_EVENTS, SafeEventEmitterProvider, WALLET_ADAPTER_TYPE } from "@web3auth/base";
import ethProvider, {IWalletProvider} from "./ethProvider";
import { CHAIN_CONFIG, CHAIN_TYPES, WalletContextValues } from "./config";

const clientId:string = process.env.WEB3AUTH_CLIENT_ID as string;
const infuraApi:string = process.env.INFURA_API as string;
const googleClientId:string = process.env.GOOGLE_AUTH_CLIENT_ID as string;
const googleVerifier:string = process.env.GOOGLE_WEB3_VERIFIER as string;

interface WalletProviderProps {
    chainType: CHAIN_TYPES;
    children: React.ReactNode;
}

export const WalletContext = createContext<WalletContextValues>({
    web3AuthType: null,
    isLoading: false,
    connected: false,
    accountAddress: null,
    accountBalance: null,
    login: async () => {
    },
    logout: async () => {
    },
});

function Web3Context({children, chainType}: WalletProviderProps) {
  const [web3Auth, setWeb3Auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<IWalletProvider | null>(null);
  const [user, setUser] = useState<unknown | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [web3AuthType, setWeb3AuthType] = useState<string | null>(null);
  const [connected, setConnected] = useState<boolean>(false);
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const [accountBalance, setAccountBalance] = useState<number | null>(null);


const setWalletProvider = useCallback(
        (web3authProvider: SafeEventEmitterProvider) => {
            console.warn('WalletContext - setWalletProvider [chainType] - Setting provider - ethProvider', web3authProvider)
            const walletProvider = ethProvider(web3authProvider);
            setProvider(walletProvider);
        },
        [chainType]
    );

    useEffect(() => {
        if (!provider) {
            console.error('WalletContext -useEffect [provider, chainType] - provider is null');
        } else {

            const initAccountDetails = async () => {
                try {
                    console.warn('WalletContext -useEffect [provider, chainType] - TRYING to getAccounts');
                    const accountAddress = await provider.getAccounts();
                    setAccountAddress(accountAddress);
                    const currentBalance = await provider.getBalance(accountAddress);
                    setAccountBalance(currentBalance)

                } catch (e) {
                    throw(e)
                }
            }

            initAccountDetails();
        }
    }, [provider, chainType])

  useEffect(() => {
    const subscribeAuthEvents = (web3auth: Web3Auth) => {
            // Can subscribe to all ADAPTER_EVENTS and LOGIN_MODAL_EVENTS
            web3auth.on(ADAPTER_EVENTS.CONNECTED, (data: unknown) => {
                console.log('XXX - WalletContext -ADAPTER_EVENTS.CONNECTED', data);
                setIsLoading(false);
                setConnected(true)
                setUser(data);
                console.log('WalletContext -ADAPTER_EVENTS.CONNECTED', user);
                setWalletProvider(web3auth.provider as SafeEventEmitterProvider);
            });

            web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
                setIsLoading(true);
            });

            web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
                console.log('WalletContext - useEffect [] - subscribeAuthEvents - ADAPTER_EVENTS.DISCONNECTED');
                setIsLoading(false);
                setConnected(false);
                setUser(null);
                setProvider(null);
                setAccountAddress(null);
                setAccountBalance(null);
            });

            web3auth.on(ADAPTER_EVENTS.ERRORED, (error: unknown) => {
                console.error('WalletContext - useEffect [] - subscribeAuthEvents - ADAPTER_EVENTS.ERRORED - Some error or user has cancelled login request', error);
                throw (error);
            });
        };

    const init = async () => {
      try {
      const web3auth = new Web3Auth({
        clientId,
        chainConfig: CHAIN_CONFIG[chainType],
        uiConfig: {
          theme: "light",
          loginMethodsOrder: ['google', 'facebook', 'apple', 'linkedin', 'twitter'],
          appLogo: "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Fv.png?alt=media&token=b3d4aea4-4d66-44a4-bbaf-83e3a2ce3de3",
        }
      });

      const openLoginAdapter = new OpenloginAdapter({
        adapterSettings: {
          clientId,
          network: "testnet",
          uxMode: "popup", 
          whiteLabel: {
            name: "Virtualground",
            logoLight: "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Flogo2.png?alt=media&token=55fcb307-a743-4c3e-9b9d-a4d9f3512572",
            logoDark: "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Flogo2.png?alt=media&token=55fcb307-a743-4c3e-9b9d-a4d9f3512572",
            defaultLanguage: "en",
            dark: false, 
          }, 
          loginConfig: {
            // Add login configs corresponding to the providers on modal
            // Google login
            google: {
              name: "vgr-google",
              verifier: googleVerifier, 
              typeOfLogin: "google", 
              clientId: googleClientId,
            },
          },
        },
      })

     web3auth.configureAdapter(openLoginAdapter);
     subscribeAuthEvents(web3auth);
      setWeb3Auth(web3auth);
      setWeb3AuthType('Login')
      await web3auth.initModal();

      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, [chainType]);

  const login = async () => {
        try {
            setIsLoading(true);
            if (!web3Auth) {
                console.error('WalletContext login - ', "no web3auth");
                return;
            }
            const localProvider = await web3Auth.connect();
            setWalletProvider(localProvider!);
        } catch (e) {
            console.error('WalletContext login - ', e);
            throw (e);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            setIsLoading(true);
            if (!web3Auth) {
                console.error('WalletContext logout - ', "no web3auth");
                return;
            }
            await web3Auth.logout();
        } catch (e) {
            console.error('WalletContext logout - ', e);
        } finally {
            setIsLoading(false);

        }
    };

    const context: WalletContextValues = {
        web3AuthType,
        isLoading,
        connected,
        accountAddress,
        accountBalance,
        login,
        logout,
    };
    

  return (
   <WalletContext.Provider value={context}>
            {children}
    </WalletContext.Provider>
  );
}

export default Web3Context;
