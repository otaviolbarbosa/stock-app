import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import SearchBar from '../components/SearchBar'
import Stock from '../components/Stock'

import * as SC from './styles';
import Chart from '../components/Chart'

export default function Home() {
  return (
    <SC.Container>
      <h1>Stock App</h1>
      <SearchBar />
      <Stock />
      <Chart />
    </SC.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  console.log('[Node.js only] ENV_VARIABLE:', process.env)

  return {
    props: {}
  }
}