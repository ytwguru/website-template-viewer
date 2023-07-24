import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const cdnUrl = `${process.env.REACT_APP_CDN_URL}/images`
const graphqlUrl = process.env.REACT_APP_GRAPHQL_URL

const client = new ApolloClient({
  uri: graphqlUrl,
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <App cdnUrl={cdnUrl} />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
