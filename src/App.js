import './style.css';

import Home from './Pages/Home';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const App = () => {
  const client = new ApolloClient({
    uri: 'https://graphql-weather-api.herokuapp.com/',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
