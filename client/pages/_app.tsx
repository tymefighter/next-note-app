import { NextComponentType } from "next";
import { ApolloProvider } from "@apollo/client";
import client from "../src/client";

interface MyAppProps {
    Component: NextComponentType<any>;
    pageProps: any;
};

function MyApp({ Component, pageProps }: MyAppProps) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp
