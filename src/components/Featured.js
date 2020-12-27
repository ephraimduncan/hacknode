import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { View, FlatList } from 'react-native';
import BlogCard from './BlogCard';
import Loading from './Loading';
import NavigationButtons from './NavigationButtons';
import { QUERY as FEATURED_QUERY } from '../graphql/Queries';

function Featured({ navigation }) {
    const [page, setPage] = useState(0);
    const { data, loading } = useQuery(FEATURED_QUERY, {
        variables: { page, type: 'FEATURED' },
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
                            borderBtn='#ECEAFF'
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

export default Featured;
