import { defaultDataIdFromObject, InMemoryCache } from "apollo-cache-inmemory"
import ApolloClient from "apollo-client"
import { ApolloLink } from "apollo-link"
import { onError } from "apollo-link-error"
import { createHttpLink } from "apollo-link-http"
import fetch from "unfetch"

const cache = new InMemoryCache({
  dataIdFromObject: object =>
    object.id ? object.id : defaultDataIdFromObject(object),
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      // eslint-disable-next-line no-console
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    )
  }
  if (networkError) {
    // eslint-disable-next-line no-console
    console.error(`[Network error]: ${networkError}`)
  }
})

const csrfToken = document.querySelector("meta[name=csrf-token]")
const httpLink = createHttpLink({
  uri: "http://localhost:3014/graphql",
  fetch: fetch,
  headers: {
    "X-CSRF-Token": csrfToken && csrfToken.getAttribute("content"),
  },
})

const link = ApolloLink.from([errorLink, httpLink])

export const apolloClient = new ApolloClient({
  cache,
  link,
  // resolvers: resolvers,
})

// cache.writeData({ data: initialState })
