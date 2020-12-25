import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { View, Text, FlatList } from 'react-native';
import BlogCard from './BlogCard';
import NavigationButtons from './NavigationButtons';

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

    if (!loading && data.storiesFeed === []) {
        return <Text>No Text Available</Text>;
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
                ListFooterComponent={
                    <NavigationButtons
                        goToNext={() => setPage(page + 1)}
                        goToPrevious={() => setPage(page - 1 < 0 ? 0 : page - 1)}
                    />
                }
            />
        </View>
    );
}

export default Home;
