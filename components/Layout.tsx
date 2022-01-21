import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/Layout.module.css'
import Showcase from '@/components/Showcase'

type LayoutProps = {
  title: string,
  description: string,
  keywords: string,
  children: any
}

export default function Layout({ title, description, keywords, children }: LayoutProps) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header/>
      { router.pathname === '/' && <Showcase /> }
      <div className={styles.container} >
        {children}
      </div>
      <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title: 'World Fruits',
  description: 'Fruits information',
  keywords: 'fruits, mango',
}
