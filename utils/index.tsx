export const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null // reached the end
    return '/api/collection' + `/${process.env.UNSPLASH_COLLECTION_ID}?page=${pageIndex}`                    // SWR key
}