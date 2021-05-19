import Head from 'next/head'
import styles from './layout.module.css'

export const siteTitle = 'Unsplash with Nextjs'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        {/* <meta property="og:image" content={img} /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="noindex" />
      </Head>

      <main>{children}</main>
    </div>
  )
}

export default Layout
