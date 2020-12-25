import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { View, Text, FlatList } from 'react-native';
import BlogCard from './BlogCard';

const BEST_QUERY = gql`
    query Best($page: Int) {
        storiesFeed(type: BEST, page: $page) {
            _id
            author {
                name
                photo
            }
            title
            totalReactions
        }
    }
`;

function Home() {
    const [page, setPage] = useState(0);
    const { data, loading } = useQuery(BEST_QUERY, { variables: { page } });

    useEffect(() => {}, [data]);

    if (loading) {
        // Use hashnode svg as a spinner
        return <Text>Loading...</Text>;
    }

    return (
        <View
            style={{
                backgroundColor: '#FAF4F4',
            }}
        >
            <FlatList
                data={data.storiesFeed}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <BlogCard
                            title={item.title}
                            authorImage={item.author.photo}
                            authorName={item.author.name}
                            totalReactions={item.totalReactions}
                        />
                    );
                }}
            />
        </View>
    );
}

export default Home;
