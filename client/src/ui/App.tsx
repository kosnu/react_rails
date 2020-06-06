import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { TodoPage } from "./todo/container/TodoPage"
import { ApolloProvider } from "react-apollo"
import { Provider } from "react-redux"
import { apolloClient } from "./graphql/apolloClient"
import { store } from "./store"

export function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Provider store={store}>
                <TodoPage />
              </Provider>
            )
          }}
        />
      </BrowserRouter>
    </ApolloProvider>
  )
}
