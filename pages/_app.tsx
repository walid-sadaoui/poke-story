import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
