import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { View, Text } from 'react-native';
import BackButton from './BackButton';
import Loading from './Loading';

const BLOG_QUERY = gql`
    query BlogInfo($slug: String!) {
        post(slug: $slug, hostname: "") {
            title
            coverImage
            author {
                name
                photo
            }
            tags {
                logo
            }
            contentMarkdown
        }
    }
`;

function BlogScreen({ route }) {
    const { slug } = route.params;
    const { data, loading } = useQuery(BLOG_QUERY, { variables: { slug } });

    useEffect(() => {}, [data]);

    if (loading) {
        return <Loading />;
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{data.post.title}</Text>
            <BackButton />
        </View>
    );
}

export default BlogScreen;
