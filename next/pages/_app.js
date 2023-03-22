import Layout from "@/components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { UserContextProvider } from "../context/UserContext.jsx";
export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </UserContextProvider>
  );
}
