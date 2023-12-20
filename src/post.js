import React from 'react'
import { Text, ArticleHeader, StyledArticle } from './styled'

const Post = React.forwardRef(({ post }, ref) => {

    const postBody = (
        <>
            <ArticleHeader>{post.title}</ArticleHeader>
            <Text>{post.body}</Text>
            <Text small>Post number: {post.id}</Text>
        </>
    )

    const content = ref
        ? <StyledArticle ref={ref}>{postBody}</StyledArticle>
        : <StyledArticle>{postBody}</StyledArticle>

    return content
})

export default Post;