import { gql } from '@apollo/client';

export const BLOG_QUERY = gql`
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

export const QUERY = gql`
    query Best($page: Int, $type: FeedType!) {
        storiesFeed(type: $type, page: $page) {
            _id
            author {
                name
                photo
            }
            title
            totalReactions
            slug
        }
    }
`;
