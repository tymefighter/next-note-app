import { NextComponentType } from "next";

interface MyAppProps {
    Component: NextComponentType<any>;
    pageProps: any;
};

function MyApp({ Component, pageProps }: MyAppProps) {
    return <Component {...pageProps} />
}

export default MyApp
