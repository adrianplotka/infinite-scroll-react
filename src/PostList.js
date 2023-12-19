import { useRef, useCallback } from "react"
import Post from "./post"
import { useInfiniteQuery } from "react-query"
import { getPostsPage } from "./api/axios"

const PostList = () => {
    const {
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        data,
        status,
        error
    } = useInfiniteQuery("/posts", ({ pageParam = 1 }) => getPostsPage
        (pageParam), {
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length ? allPages.length + 1 : undefined
        }
    })

    const intObserved = useRef()
    const lastPostRef = useCallback(post => {
        if (isFetchingNextPage) return

        if (intObserved.current) intObserved.current.disconnect()

        intObserved.current = new IntersectionObserver(post => {
            if (post[0].isIntersecting && hasNextPage) {
                console.log("We are near the last post!")
                fetchNextPage()
            }
        })

        if (post) intObserved.current.observe(post)
    }, [isFetchingNextPage, fetchNextPage, hasNextPage])

    if (status === "error") return <p className="center">Error: {error.message}</p>

    const content = data?.pages.map(pg => {
        return pg.map((post, i) => {
            if (pg.length === i + 1) {
                return <Post ref={lastPostRef} key={post.id} post={post} />
            }
            return <Post key={post.id} post={post} />
        })
    })

    return (
        <>
            <h1> Infinite Scroll </h1>
            {content}
            {isFetchingNextPage && <p className="center">Loading More Posts...</p>}
            <p className="center"><a href="#top">Back to top</a></p>
        </>
    )
}

export default PostList