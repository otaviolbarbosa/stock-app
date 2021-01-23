import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import SearchBar from '../components/SearchBar'
import Stock from '../components/Stock'
import Loading from '../components/Loading'

import * as SC from './styles';
import Chart from '../components/Chart'
import { useSelector } from 'react-redux'
import { RootState } from '../interfaces'

export default function Home() {
  const { quote, loading } = useSelector(({ stockReducer }: RootState) => stockReducer)

  return (
    <SC.Container>
      <h1>Stock App</h1>
      <SearchBar />
      {quote && (
        <>
          <Stock />
          <Chart />
        </>
      )}
      {/* { loading && <Loading /> } */}
    </SC.Container>
  )
}
