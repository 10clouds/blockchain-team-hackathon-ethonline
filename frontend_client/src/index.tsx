import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import "./index.css";
import { DAppProvider } from "@usedapp/core";
import { useDappConfig } from "./useDappConfig";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);

const APIURL = "https://api.thegraph.com/subgraphs/name/spaceh3ad/nftpadlock";

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache()
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DAppProvider config={useDappConfig}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ApolloProvider>
      </DAppProvider>
    </Provider>
  </React.StrictMode>
);
