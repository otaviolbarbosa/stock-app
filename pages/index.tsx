import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
// import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
// import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home() {
  return (
    <div>ok!</div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const allPostsData = getSortedPostsData()
  return {
    props: {
      // allPostsData
    }
  }
}