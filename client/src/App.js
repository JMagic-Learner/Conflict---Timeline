import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Switch>
            <Route exact path="/">
              <PAGE NUMBER 1 />
            </Route>
            <Route exact path="">
              <PAGE NUMBER 2 />
            </Route>
            <Route exact path="">
              <PAGE NUMBER 3 />
            </Route>
            <Route>
              <PAGE NUMBEr 4 />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
