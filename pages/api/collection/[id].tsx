import { NextApiRequest, NextApiResponse } from 'next'
import { createApi } from 'unsplash-js';

export default function getCollection(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id, page },
  } = req
  return new Promise<void>((resolve) => {

    const pageIndex = parseInt(page.toString());

    const unsplash = createApi({
      accessKey: process.env.UNSPLASH_ACCESS_KEY,
    });

    unsplash.collections.getPhotos({
      collectionId: process.env.UNSPLASH_COLLECTION_ID,
      page: pageIndex,
      perPage: 12
    }).then((json) => {
      console.log('json', json)
      res.setHeader('Cache-Control', 'max-age=180000')
      res.status(200).json([json])
      resolve()
    }).catch((error) => {
      res.status(405).json(error)
      resolve()
    })
  })
}
