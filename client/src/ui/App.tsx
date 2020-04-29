import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import {TodoPage} from "./todo/container/TodoPage"
import { ApolloProvider } from 'react-apollo';
import { apolloClient } from "./graphql/apolloClient";

export function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => <TodoPage />}
        />
      </BrowserRouter>
    </ApolloProvider>
  );
}
