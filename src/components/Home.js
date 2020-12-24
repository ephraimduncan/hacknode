import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { View, Text, ActivityIndicator, FlatList, Button } from 'react-native';

const FEATURED_QUERY = gql`
    query Featured($page: Int) {
        storiesFeed(type: FEATURED, page: $page) {
            _id
            title
            author {
                username
            }
        }
    }
`;

function Home() {
    const [page, setPage] = useState(0);
    const { data, loading } = useQuery(FEATURED_QUERY, { variables: { page } });

    useEffect(() => {}, [data]);

    if (loading) {
        // Use hashnode svg as a spinner
        return <ActivityIndicator />;
    }

    return (
        <View>
            <FlatList
                data={data.storiesFeed}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <Text
                            style={{
                                margin: 20,
                            }}
                        >
                            {item.title}
                        </Text>
                    );
                }}
            />
        </View>
    );
}

export default Home;
