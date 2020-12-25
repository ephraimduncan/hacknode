import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { View, FlatList } from 'react-native';
import BlogCard from './BlogCard';
import Loading from './Loading';
import NavigationButtons from './NavigationButtons';

const FEATURED_QUERY = gql`
    query Featured($page: Int) {
        storiesFeed(type: FEATURED, page: $page) {
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
    const { data, loading } = useQuery(FEATURED_QUERY, { variables: { page } });

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (loading) {
        return <Loading />;
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
