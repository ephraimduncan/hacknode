import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { View, FlatList } from 'react-native';
import BlogCard from './BlogCard';
import Loading from './Loading';
import NavigationButtons from './NavigationButtons';
import { QUERY as RECENT_QUERY } from '../graphql/Queries';

function Recent({ navigation }) {
    const [page, setPage] = useState(0);
    const { data, loading } = useQuery(RECENT_QUERY, {
        variables: { page, type: 'NEW' },
    });

    useEffect(() => {}, [data]);

    if (loading) {
        return <Loading />;
    }

    return (
        <View>
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
                            borderBtn='#FFEDD9'
                            toBlogScreen={() =>
                                navigation.navigate('Blog', { slug: item.slug })
                            }
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

export default Recent;
