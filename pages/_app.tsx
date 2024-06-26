import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "../src/store";
import { AppWrapper } from "@/components/AppWrapper";

// react-query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={15}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            style: {},
            error: {},
          }}
        />

        <QueryClientProvider client={queryClient}>
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </QueryClientProvider>
      </Provider>
    </>
  );
}
