import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity,
    Linking,
    Share,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
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
                blogHandle
                publicationDomain
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

    async function onShare(url) {
        try {
            await Share.share({
                message: url,
            });
        } catch (error) {
            alert(error.message);
        }
    }

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
            <ScrollView
                style={{
                    height: '100%',
                    marginHorizontal: 10,
                    marginTop: StatusBar.currentHeight,
                }}
            >
                <Image
                    source={
                        data.post.coverImage
                            ? {
                                  uri: data.post.coverImage,
                              }
                            : require('../../assets/hashnode.png')
                    }
                    style={styles.coverImage}
                />
                <Text style={styles.title}>{data.post.title}</Text>
                <TouchableOpacity
                    style={styles.rowCenter}
                    onPress={() =>
                        Linking.openURL(
                            `https://hashnode.com/@${data.post.author.blogHandle}`
                        )
                    }
                >
                    <Image
                        source={
                            data.post.author.photo
                                ? {
                                      uri: data.post.author.photo,
                                  }
                                : require('../../assets/hashnode.png')
                        }
                        style={styles.profileImage}
                    />
                    <Text style={styles.authorName}>{data.post.author.name}</Text>
                </TouchableOpacity>
                <Markdown style={markdownStyles}>{data.post.contentMarkdown}</Markdown>
                <View style={styles.postBtn}>
                    <TouchableOpacity>
                        <Feather name='bookmark' size={30} color='#8E8E8F' />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            const username = data.post.author.blogHandle;
                            const publicationDomain = data.post.author.publicationDomain;

                            const url = publicationDomain
                                ? `https://${publicationDomain}`
                                : `https://${username}.hashnode.dev`;

                            return onShare(url);
                        }}
                    >
                        <Feather name='share' size={30} color='#8E8E8F' />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const mdStyles = {
    body: {
        padding: 10,
    },

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

    paragraph: {
        fontSize: 15,
    },
};

const markdownStyles = StyleSheet.create(mdStyles);
const styles = StyleSheet.create({
    coverImage: {
        flex: 1,
        width: '100%',
        height: 180,
        resizeMode: 'contain',
    },
    title: {
        fontWeight: '900',
        fontSize: 30,
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    authorName: {
        paddingLeft: 10,
        fontSize: 17,
    },
    postBtn: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default BlogScreen;
