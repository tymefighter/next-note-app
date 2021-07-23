import "../styles/global.scss";
import { NextComponentType } from "next";
import { ApolloProvider } from "@apollo/client";
import client from "../src/client";
import Nav from "../src/components/Nav";

interface MyAppProps {
    Component: NextComponentType<any>;
    pageProps: any;
};

function MyApp({ Component, pageProps }: MyAppProps) {
    return (
        <ApolloProvider client={client}>
            <Nav 
                nameToLink={[
                    {name: "Home", link: "/"},
                    {name: "notes", link: "/notes"}
                ]}
            />
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp
