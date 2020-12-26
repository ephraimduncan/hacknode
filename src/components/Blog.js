import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Loading from './Loading';
import Markdown from 'react-native-markdown-display';

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
        <View
            style={{
                flex: 1,
            }}
        >
            <ScrollView style={{ height: '100%', marginHorizontal: 10, marginTop: 40 }}>
                <Text>{data.post.title}</Text>
                <Markdown style={markdownStyles}>{data.post.contentMarkdown}</Markdown>
            </ScrollView>
        </View>
    );
}

const styles = {
    body: {
        padding: 10,
    },

    // Headings
    heading1: {
        color: '#1a202c',
    },
    heading2: {
        color: '#1a202c',
    },
    heading3: {
        color: '#1a202c',
    },
    heading4: {
        color: '#1a202c',
    },
    heading5: {
        color: '#1a202c',
    },
    heading6: {
        color: '#1a202c',
    },

    code_inline: {
        borderWidth: 1,
        borderColor: '#ccc',
        color: '#1a202c',
        fontWeight: 'bold',
    },

    code_block: {
        borderColor: '#ccc',
        backgroundColor: '#ccc',
        borderRadius: 6,
        margin: 2,
    },

    fence: {
        borderColor: '#ccc',
        backgroundColor: '#ccc',
        borderRadius: 6,
        margin: 2,
    },

    link: {
        color: '#2962ff',
    },
};

const markdownStyles = StyleSheet.create(styles);

export default BlogScreen;
