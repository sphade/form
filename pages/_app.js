import { QueryClient, QueryClientProvider } from "react-query";
import {  ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={ false}/>
      </QueryClientProvider>
      
    </Provider>
  );
}

export default MyApp;
