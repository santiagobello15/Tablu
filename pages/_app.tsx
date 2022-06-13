import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import GameContext from "../context/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameContext>
      <ChakraProvider>
        {/*
 // @ts-ignore */}
        <Component {...pageProps} />
      </ChakraProvider>
    </GameContext>
  );
}

export default MyApp;
