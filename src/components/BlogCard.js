import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const BlogCard = ({
    title,
    authorImage,
    authorName,
    totalReactions,
    toBlogScreen,
    borderBtn,
}) => {
    return (
        <TouchableOpacity onPress={toBlogScreen}>
            <View style={[styles.topView, { backgroundColor: borderBtn }]}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.btnAlignment}>
                    <View style={styles.rowCenter}>
                        <Image
                            source={
                                authorImage
                                    ? {
                                          uri: authorImage,
                                      }
                                    : require('../../assets/hashnode.png')
                            }
                            style={styles.profileImage}
                        />
                        <Text style={styles.authorName}>{authorName}</Text>
                    </View>
                    <View style={styles.rowCenter} opacity={0.7}>
                        <Feather name='thumbs-up' size={20} />
                        <Text style={{ paddingLeft: 6, fontSize: 17 }}>
                            {totalReactions}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    topView: {
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
        borderRadius: 12,
    },
    marginBtn: {
        marginBottom: 5,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#3450A1',
        opacity: 90,
        marginBottom: 5,
    },
    btnAlignment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    authorName: { paddingLeft: 10, fontSize: 17 },
    reactionCount: { paddingLeft: 6, fontSize: 17 },
});

export default BlogCard;
