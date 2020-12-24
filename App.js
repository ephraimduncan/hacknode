import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './src/graphql/Client';
import Main from './src/navigation/Main';

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Main />
        </ApolloProvider>
    );
}
