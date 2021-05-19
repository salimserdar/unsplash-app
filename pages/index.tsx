import Head from 'next/head'
import Layout, { siteTitle } from 'components/Layout'
import Gallery from 'components/Gallery'
import Stats from 'components/Stats'
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
