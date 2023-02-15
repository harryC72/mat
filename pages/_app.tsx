import "@/styles/globals.css";
import type { AppProps } from "next/app";
import App, { AppContext } from "next/app";
import GlobalStyle from "./../styles/global/index";
import { ThemeProvider } from "styled-components";
import theme from "./../styles/theme/index";
import { NextPageContext } from "next";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

MyApp.getInitialProps = async (appContext: AppContext) => {
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps };
};

export default MyApp;
