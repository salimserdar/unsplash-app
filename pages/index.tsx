import Head from 'next/head'
import Layout, { siteTitle } from 'components/Layout'
import Photos from 'components/Photos'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Photos id_collection={1319040}/>
    </Layout>
  )
}

export default Home
